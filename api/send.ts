export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const {
    name, email, phone, organization, orgType, orgSize,
    state, firm, practiceSize, system, message
  } = req.body;

  if (!name || !email || !system || !organization) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'SMRG Consulting <support@smrgconsulting.com>',
        to: ['support@smrgconsulting.com'],
        subject: `Live Demo Request — ${system} — ${organization}`,
        html: `
          <h2 style="color:#0a0e1a;font-family:sans-serif;">New Live Demo Request</h2>
          <table style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">System</td><td style="padding:8px;border:1px solid #ddd;">${system}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">Name</td><td style="padding:8px;border:1px solid #ddd;">${name}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">Email</td><td style="padding:8px;border:1px solid #ddd;">${email}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">Phone</td><td style="padding:8px;border:1px solid #ddd;">${phone || '—'}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">Organization</td><td style="padding:8px;border:1px solid #ddd;">${organization}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">Organization Type</td><td style="padding:8px;border:1px solid #ddd;">${orgType || '—'}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">Organization Size</td><td style="padding:8px;border:1px solid #ddd;">${orgSize || '—'}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">State</td><td style="padding:8px;border:1px solid #ddd;">${state || '—'}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">Firm</td><td style="padding:8px;border:1px solid #ddd;">${firm || '—'}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">Law Practice Size</td><td style="padding:8px;border:1px solid #ddd;">${practiceSize || '—'}</td></tr>
            <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold;background:#f9f9f9;">Message</td><td style="padding:8px;border:1px solid #ddd;">${message || '—'}</td></tr>
          </table>
        `,
      }),
    });

    if (response.ok) {
      return res.status(200).json({ success: true });
    } else {
      const error = await response.json();
      return res.status(500).json({ error });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
