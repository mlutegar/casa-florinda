import { MercadoPagoConfig, Preference } from 'mercadopago'

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' })
  }

  const {
    acomodacaoNome,
    acomodacaoSlug,
    checkin,
    checkout,
    hospedes,
    noites,
    total,
    nome,
    email,
    cpf,
    telefone,
  } = req.body

  // Validações básicas no servidor
  if (!acomodacaoSlug || !checkin || !checkout || !total || !nome || !email) {
    return res.status(400).json({ error: 'Dados incompletos.' })
  }

  if (total <= 0) {
    return res.status(400).json({ error: 'Valor inválido.' })
  }

  const externalReference = `${acomodacaoSlug}-${Date.now()}`
  const siteUrl = process.env.SITE_URL || 'https://pousadacasaflorinda.com.br'

  try {
    const preference = await new Preference(client).create({
      body: {
        items: [
          {
            id: acomodacaoSlug,
            title: `${acomodacaoNome} — ${checkin} a ${checkout} (${noites} noite${noites > 1 ? 's' : ''})`,
            description: `Pousada Casa Florinda · ${hospedes} hóspede${hospedes > 1 ? 's' : ''}`,
            quantity: 1,
            unit_price: Number(total),
            currency_id: 'BRL',
          },
        ],
        payer: {
          name: nome,
          email,
          identification: cpf ? { type: 'CPF', number: cpf } : undefined,
          phone: telefone ? { number: telefone } : undefined,
        },
        back_urls: {
          success: `${siteUrl}/reserva/confirmada`,
          failure: `${siteUrl}/reserva/erro`,
          pending: `${siteUrl}/reserva/pendente`,
        },
        auto_return: 'approved',
        external_reference: externalReference,
        notification_url: `${siteUrl}/api/webhook`,
        metadata: {
          acomodacaoSlug,
          checkin,
          checkout,
          hospedes,
          noites,
          nome,
          email,
          telefone,
        },
        statement_descriptor: 'POUSADA CASA FLORINDA',
      },
    })

    return res.status(200).json({
      preferenceId: preference.id,
      externalReference,
    })
  } catch (err) {
    console.error('Erro ao criar preferência MP:', err)
    return res.status(500).json({ error: 'Erro ao criar preferência de pagamento.' })
  }
}
