const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const credentials = require('./gmailCredentials.json');

// Créer un client OAuth2
const auth = new google.auth.OAuth2(
    credentials.web.client_id,
    credentials.web.client_secret,
    credentials.web.redirect_uris[0]  // Utiliser la première URI de redirection
);

// Chemin vers le fichier de tokens
const TOKEN_PATH = path.join(__dirname, 'token.json');

// Fonction pour obtenir un nouveau token
async function getNewToken() {
    const authUrl = auth.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/gmail.send']
    });
    console.log('Authorize this app by visiting this url:', authUrl);

    // Obtenir le code de l'utilisateur via un prompt
    const code = await getCodeFromUser();

    const { tokens } = await auth.getToken(code);
    auth.setCredentials(tokens);
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
    console.log('Token stored to', TOKEN_PATH);
}

// Fonction pour charger les tokens stockés ou obtenir un nouveau token
async function authorize() {
    try {
        const token = fs.readFileSync(TOKEN_PATH);
        auth.setCredentials(JSON.parse(token));

        // Vérifier si le token est expiré
        const tokenInfo = await auth.getAccessToken();
        if (!tokenInfo.token) {
            throw new Error('Token expired');
        }
    } catch (error) {
        if (auth.credentials.refresh_token) {
            try {
                // Utiliser le refresh token pour obtenir un nouveau token
                await auth.refreshAccessToken();
                const tokens = auth.credentials;
                fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
                console.log('Token refreshed and stored to', TOKEN_PATH);
            } catch (refreshError) {
                console.error('Error refreshing access token:', refreshError);
                await getNewToken();
            }
        } else {
            await getNewToken();
        }
    }
}

// Fonction pour envoyer un email
async function sendGmail(emailContent) {
    const email = emailContent.join('\r\n').trim();
    const base64Email = Buffer.from(email).toString('base64');
    const gmail = google.gmail({ version: 'v1', auth });
    await gmail.users.messages.send({
        userId: 'me',
        requestBody: {
            raw: base64Email
        }
    });
}

// Fonction pour obtenir le code d'autorisation de l'utilisateur
function getCodeFromUser() {
  return new Promise((resolve) => {
    const readline = require('readline');
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      resolve(code);
    });
  });
}

module.exports = { authorize, sendGmail };
