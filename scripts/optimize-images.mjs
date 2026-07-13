// Converte HEIC -> JPEG, gera versoes responsivas (webp+jpg em varias larguras),
// favicon, apple-touch-icon e imagem social (og-image). Uso: npm run images
import { readdir, readFile, mkdir } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import sharp from 'sharp'
import heicConvert from 'heic-convert'

const SRC = path.resolve('midia')
const OUT = path.resolve('public', 'midia')
const WIDTHS = [480, 960, 1600]

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
    const base = sharp(jpeg).rotate()

    // Versoes responsivas
    for (const w of WIDTHS) {
      const resized = base.clone().resize({ width: w, withoutEnlargement: true })
      await resized.clone().webp({ quality: 78 }).toFile(path.join(OUT, `${name}-${w}.webp`))
      await resized.clone().jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(OUT, `${name}-${w}.jpg`))
    }
    // Base (maior largura) para background-image e fallback do img()
    const full = base.clone().resize({ width: 1600, withoutEnlargement: true })
    await full.clone().webp({ quality: 80 }).toFile(path.join(OUT, `${name}.webp`))
    await full.clone().jpeg({ quality: 82, mozjpeg: true }).toFile(path.join(OUT, `${name}.jpg`))
    console.log(`ok  ${file} -> ${name} (${WIDTHS.join('/')} + full)`)
  }

  // Logo
  const logoSrc = files.find((f) => /^logo\./i.test(f))
  if (logoSrc) {
    const logoPath = path.join(SRC, logoSrc)
    await sharp(logoPath).png({ quality: 90 }).toFile(path.join(OUT, 'logo.png'))

    // Favicon (quadrado, logo contido em fundo off-white)
    const CREAM = { r: 245, g: 241, b: 232, alpha: 1 }
    for (const [file, size] of [['favicon-32.png', 64], ['apple-touch-icon.png', 180]]) {
      await sharp(logoPath)
        .resize({ width: Math.round(size * 0.86), fit: 'inside' })
        .flatten({ background: CREAM })
        .extend({ background: CREAM, top: 8, bottom: 8, left: 8, right: 8 })
        .resize(size, size, { fit: 'contain', background: CREAM })
        .png()
        .toFile(path.join(OUT, file))
    }
    console.log('ok  favicon-32.png / apple-touch-icon.png')
  }

  // Imagem social (og-image 1200x630): foto do chale escurecida + logo centralizada
  const ogBase = sharp(await toBufferJpeg(photos.find((f) => /_2\./i.test(f)) || photos[0]))
    .rotate()
    .resize(1200, 630, { fit: 'cover', position: 'centre' })
  const dark = Buffer.from(
    `<svg width="1200" height="630"><rect width="1200" height="630" fill="black" opacity="0.42"/></svg>`,
  )
  const logoCard = await sharp(path.join(SRC, logoSrc))
    .resize({ width: 520, fit: 'inside' })
    .png()
    .toBuffer()
  await ogBase
    .composite([{ input: dark }, { input: logoCard, gravity: 'centre' }])
    .jpeg({ quality: 86 })
    .toFile(path.join(OUT, 'og-image.jpg'))
  console.log('ok  og-image.jpg (1200x630)')

  console.log(`\nConcluido: ${photos.length} fotos + favicons + og-image em public/midia/`)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
