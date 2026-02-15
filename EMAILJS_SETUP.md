# EmailJS Setup Guide for Contact Form

Your contact form is now integrated with EmailJS! Follow these steps to complete the setup:

## 📋 Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's free - 200 emails/month)
3. Verify your email address

## 📧 Step 2: Add Email Service

1. In your EmailJS dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. **Copy the Service ID** (e.g., `service_abc123`)

## 📝 Step 3: Create Email Template

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template structure:

```
Subject: New Portfolio Contact from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

## 🔑 Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find your **Public Key** (e.g., `AbCdEfGhIjKlMnOp`)
3. Copy it

## ⚙️ Step 5: Update Your Code

Open `src/pages/Contact.jsx` and replace these placeholders (around line 22-24):

```javascript
const serviceId = 'YOUR_SERVICE_ID';      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';    // Replace with your Template ID
const publicKey = 'YOUR_PUBLIC_KEY';      // Replace with your Public Key
```

**Example:**
```javascript
const serviceId = 'service_abc123';
const templateId = 'template_xyz789';
const publicKey = 'AbCdEfGhIjKlMnOp';
```

## ✅ Step 6: Test Your Form

1. Go to http://localhost:5173/contact
2. Fill out the form
3. Click "Send Message"
4. You should see "Message sent successfully!"
5. Check your email inbox

## 🎯 What Happens Now?

- ✅ Form shows "Sending..." while submitting
- ✅ Success message appears when email is sent
- ✅ Error message shows if something goes wrong
- ✅ Form clears automatically on success
- ✅ You receive emails at: **rameezwang@gmail.com**

## 🔒 Security Note

The credentials in the code are **PUBLIC KEY only** - they're safe to expose in your frontend code. EmailJS handles the actual email sending securely on their servers.

## 📊 Free Tier Limits

- **200 emails/month** (free)
- Upgrade to paid plan if you need more

## 🆘 Troubleshooting

**Form not sending?**
- Check browser console for errors
- Verify all three IDs are correct
- Make sure email service is connected in EmailJS dashboard
- Check EmailJS dashboard for failed requests

**Not receiving emails?**
- Check spam folder
- Verify email service connection
- Test with EmailJS dashboard's "Test" feature

---

That's it! Your contact form is now fully functional. 🎉
