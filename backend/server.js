const express = require('express');
const path = require('path');
const { authorize, sendGmail } = require('./gmailInit'); // Importer les fonctions nécessaires
const app = express();

// Middleware pour parser les corps de requêtes JSON
app.use(express.json());

// Middleware pour parser les corps de requêtes URL-encoded
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'build')));

// Initialiser l'authentification OAuth au démarrage du serveur
(async () => {
    await authorize();
})();

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// Exemple d'utilisation de sendGmail
app.post('/api/contact', async (req, res) => {
    try {
        const emailContent = [
            'From: "Alexandre RONGIER" <contact.tainalo2@gmail.com>',
            'To: contact.tainalo2@gmail.com',
            'Subject: ' + req.body.subject + ' ' + req.body.firstName + ' ' + req.body.lastName + ' <' + req.body.email + '>',
            '',
            req.body.message
        ];
        await sendGmail(emailContent);
        res.send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

app.listen(9000, () => {
    console.log('Running on port 9000');
});
