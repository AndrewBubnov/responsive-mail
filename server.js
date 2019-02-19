const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const PORT = process.env.port || 3000;
const MailListener = require("mail-listener2");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


//***********************************************************************************
app.use(express.static(__dirname + '/build/'));
//***********************************************************************************
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/build/');

});

app.post('/', (req, res) => {
    const { to, subject, text } = req.body
    const from = 'reactdevmail@gmail.com'
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'reactdevmail@gmail.com',
            pass: ''
        }
    });

    const mailOptions = { from, to, subject, text };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) console.log(error);
    });

});

    const mailListener = new MailListener({
        username: "reactdevmail@gmail.com",
        password: "acnot88_0175",
        host: "imap.gmail.com",
        port: 993,
        tls: true,
        connTimeout: 10000,
        authTimeout: 5000,
        debug: null,
        tlsOptions: { rejectUnauthorized: false },
        mailbox: "INBOX",
        searchFilter: ["ALL"],
        markSeen: false,
        fetchUnreadOnStart: true,
        mailParserOptions: {streamAttachments: true},
    });
    const array = []

    mailListener.on("mail", function(mail){
        array.push({id: new Date(mail.date).getTime(), from: mail.from[0].address, subject: mail.subject, text:mail.text.replace(/\n/gi, ' '), status: false,
            answered: false, checked: false, to: '',})
        app.get('/api/', (req, res) => {
            res.json(array)
        })
    }).start()

app.listen(PORT, () => console.log(`Server started on ${PORT} port`));