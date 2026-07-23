import { MercadoPagoConfig, Payment } from 'mercadopago'

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_ACCESS_TOKEN,
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end()
  }

  const { type, data } = req.body || {}

  // Mercado Pago envia notificações de vários tipos; só nos importa 'payment'
  if (type !== 'payment' || !data?.id) {
    return res.status(200).end()
  }

  try {
    const payment = await new Payment(client).get({ id: data.id })

    console.log('Webhook MP payment:', {
      id: payment.id,
      status: payment.status,
      external_reference: payment.external_reference,
      metadata: payment.metadata,
    })

    if (payment.status === 'approved') {
      const {
        acomodacaoSlug,
        checkin,
        checkout,
        nome,
        email,
        telefone,
        hospedes,
        noites,
      } = payment.metadata || {}

      // -------------------------------------------------------
      // Aqui você pode:
      // 1. Enviar e-mail de confirmação para o hóspede e para a Cida
      //    (ex: via Resend.com — instale o pacote 'resend')
      // 2. Marcar as datas como ocupadas num banco de dados
      //    (ex: Neon PostgreSQL via @neondatabase/serverless)
      // 3. Enviar mensagem WhatsApp para a Cida via API
      //
      // Por enquanto, apenas logamos:
      // -------------------------------------------------------

      console.log(`✅ Pagamento aprovado!
Acomodação: ${acomodacaoSlug}
Período: ${checkin} → ${checkout} (${noites} noites)
Hóspede: ${nome} (${email} · ${telefone})
Qtd: ${hospedes} pessoa(s)`)

      // Exemplo de envio de e-mail com Resend (descomente quando instalar):
      // import { Resend } from 'resend'
      // const resend = new Resend(process.env.RESEND_API_KEY)
      // await resend.emails.send({
      //   from: 'noreply@pousadacasaflorinda.com.br',
      //   to: [email, 'casaflorinda35@gmail.com'],
      //   subject: `✅ Reserva confirmada — ${acomodacaoSlug}`,
      //   html: `<p>Olá ${nome}, sua reserva foi confirmada!</p>
      //          <p><b>Acomodação:</b> ${acomodacaoSlug}</p>
      //          <p><b>Check-in:</b> ${checkin} | <b>Check-out:</b> ${checkout}</p>`
      // })
    }

    return res.status(200).end()
  } catch (err) {
    console.error('Erro no webhook MP:', err)
    // Retornamos 200 para o MP não retentar infinitamente
    return res.status(200).end()
  }
}
