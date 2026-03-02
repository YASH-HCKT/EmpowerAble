export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        // In a real production app, we would use a service like SendGrid, Mailgun, or Nodemailer.
        // For this implementation, we will log the submission and simulate the email sending.
        console.log(`New Contact Form Submission to yashcrj06@gmail.com:`);
        console.log(`From: ${firstName} ${lastName} (${email})`);
        console.log(`Message: ${message}`);

        // Simulate success
        return res.status(200).json({
            success: true,
            message: 'Your message has been sent successfully to yashcrj06@gmail.com'
        });
    } catch (error) {
        console.error('Contact Form Error:', error);
        return res.status(500).json({ error: 'Failed to send message' });
    }
}
