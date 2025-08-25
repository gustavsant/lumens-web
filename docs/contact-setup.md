Contact form delivery via EmailJS

Overview
- The contact form uses EmailJS client SDK, so no backend is needed.
- Works on GitHub Pages and anywhere the static site is hosted.

What you need from EmailJS
- Service ID (e.g. `service_xxx`)
- Template ID (e.g. `template_yyy`)
- Public Key (e.g. `abc123...`) — safe to use in client code

Steps
1) Create an EmailJS account and service
   - Go to https://www.emailjs.com/ and create an account.
   - Connect an email service (e.g., Gmail or custom SMTP) and note the Service ID.

2) Create a template
   - Add a new template with variables: `name`, `email`, `whatsapp`, `message`.
   - Set the recipient to `lumensweboficial@gmail.com` in the template settings, or reference a `to_email` variable if you prefer.

3) Add env vars
   - Create a `.env` (or edit.env.example) in the project root with:
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
   - Re-run dev server if it’s running.

4) Verify locally
   - Run `npm run dev`, submit the contact form, and check your inbox.

Security notes
- Only the Public Key is intended for the client; Service/Template IDs are identifiers and not secrets, but anyone with your Public Key and IDs could attempt to send. Rate limit and spam protections are available in EmailJS.
- If you require full control and secrecy of credentials, use a serverless function with a provider like Resend/SendGrid instead.
