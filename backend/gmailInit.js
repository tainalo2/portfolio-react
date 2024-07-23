const { google } = require('googleapis');
const credentials = require('./gmailCredentails.json');

const auth = new google.auth.OAuth2(
    credentials.client_id,
    credentials.client_secret,
    'https://www.alexandre-rongier.fr/api/gmail'
);

// Load token or redirect to auth URL
auth.setCredentials(tokens);

// Create Gmail client
const gmail = google.gmail({ version: 'v1', auth });

async function sendGmail(emailContent) {
    const email = emailContent.join('\r\n').trim();
    const base64Email = Buffer.from(email).toString('base64');
    await gmail.users.messages.send({
        userId: 'me',
        requestBody: {
            raw: base64Email
        }
    });
}

module.exports = { sendGmail, auth };