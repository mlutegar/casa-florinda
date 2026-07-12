// Converte HEIC -> JPEG, otimiza todas as fotos para .webp e copia a logo.
// Uso: npm run images
import { readdir, readFile, writeFile, mkdir, copyFile } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'
import heicConvert from 'heic-convert'

const SRC = path.resolve('midia')
const OUT = path.resolve('public', 'midia')
const MAX_WIDTH = 2000

async function toBufferJpeg(file) {
  const ext = path.extname(file).toLowerCase()
  const raw = await readFile(path.join(SRC, file))
  if (ext === '.heic' || ext === '.heif') {
    const out = await heicConvert({ buffer: raw, format: 'JPEG', quality: 0.92 })
    return Buffer.from(out)
  }
  return raw
}

async function run() {
  if (!existsSync(OUT)) await mkdir(OUT, { recursive: true })
  const files = await readdir(SRC)
  const photos = files
    .filter((f) => /^foto_pousada_/i.test(f))
    .sort((a, b) => {
      const na = parseInt(a.match(/(\d+)/)?.[1] ?? '0', 10)
      const nb = parseInt(b.match(/(\d+)/)?.[1] ?? '0', 10)
      return na - nb
    })

  let i = 0
  for (const file of photos) {
    i += 1
    const name = `pousada-${String(i).padStart(2, '0')}`
    const jpeg = await toBufferJpeg(file)
    const pipeline = sharp(jpeg).rotate().resize({ width: MAX_WIDTH, withoutEnlargement: true })
    await pipeline.clone().webp({ quality: 80 }).toFile(path.join(OUT, `${name}.webp`))
    await pipeline.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(OUT, `${name}.jpg`))
    console.log(`ok  ${file} -> ${name}.webp/.jpg`)
  }

  // Logo (PNG) -> otimiza e copia
  const logoSrc = files.find((f) => /^logo\./i.test(f))
  if (logoSrc) {
    await sharp(path.join(SRC, logoSrc)).png({ quality: 90 }).toFile(path.join(OUT, 'logo.png'))
    console.log(`ok  ${logoSrc} -> logo.png`)
  }

  console.log(`\nConcluido: ${photos.length} fotos otimizadas em public/midia/`)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
