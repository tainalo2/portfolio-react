const express = require('express');
const path = require('path');
const { sendGmail } = require('./gmailInit'); // Importer la fonction sendGmail
const app = express();

app.use(express.static(path.join(__dirname, '..', 'build')));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

// Exemple d'utilisation de sendGmail
app.post('/api/contact', async (req, res) => {
    try {
        const emailContent = [
            'From: '+ req.body.email,
            'To: "Alexandre RONGIER" <contact.tainalo2@gmail.com>',
            'Content-type: text/html;charset=iso-8859-1',
            'MIME-Version: 1.0',
            'Subject: ' + req.body.subject,
            '',
            req.body.message + " \n\n" + req.body.firstName + " " + req.body.lastName + " \n" + req.body.phone
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
