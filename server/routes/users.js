
var TempleUsers = require('../models/templeUser');
var TempleUserId = require('../common/templeUser_id')
var express = require('express');
var router = express.Router();
//mailchimp
var Mailchimp = require('mailchimp-api-v3');
var api_key ="333efb401189c3c3eb016ac9312bc867-us17";
var list_id = "7472a1bc3f";
var mailchimp = new Mailchimp(api_key);
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'em1777933@gmail.com',
        pass: 'moskv1980'
    }
});

router.post('/reg', function (req, res) {
    var hash = TempleUserId();
    var _Href = `localhost:3106/email-verification?id=${hash}`
    var mail_to = "emoskvich@yandex.ru"
    var html = "<div><h1>Email verification</h1><p><a target='_blank' rel='noopener noreferrer' href="+_Href.toString()+ ">"+_Href+"</a></p></div>"
    var mailOptions = {
        from: 'em1777933@gmail.com',
        to: `${mail_to}`,
        subject: 'donotreply',
        html: `${html}`
    };
    console.log(mailOptions);
    var TU = new TempleUsers({ name : req.body.name, email: req.body.email, password: req.body.password, _id: hash})
    TU.save( function(err, user) {
            //console.log(req.body);
            if (err) {
                console.log(err);
            } else {
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
            };
        });
});

router.post('/subscribe', (req, res) => {
    mailchimp.post('/lists/' + list_id + '/members', {
        email_address : req.body.email,
        status : 'subscribed',
        merge_fields: {
            FNAME: req.body.fName,
            LNAME: req.body.lName
        }
    })
        .then(function() {
            res.json("success")
        })
        .catch( err => {
            (err.status === 400 && err.title === "Member Exists")?
                res.status(220).end():
                res.statusMessage = `${err.detail}`;
            res.status(err.status).end()
        })
});

router.post('/verify', function (req, res) {
    console.log(req.body._id)
});

module.exports = router;
