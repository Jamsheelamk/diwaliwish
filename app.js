

const express= require("express");

const app= express();

 const path = require('path');

 const nodeMailer = require('nodemailer');
 const bodyParser = require('body-parser');



app.use(express.static('src'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port=process.env.PORT||2000;

const nav = [ {link:'/diwali'} ];

const diwaliRouter= require('./src/routes/diwaliRoutes')(nav);

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/diwali', diwaliRouter);


app.get('/',function(req,res){

    res.render("index",
    {
        nav,
        
    });
});

// app.post('/send-email', function (req, res) {
//     let transporter = nodeMailer.createTransport({
//         host: 'smtp.gmail.com',
//         port: 465,
//         secure: true,
//         auth: {
//             // should be replaced with real sender's account
//             user: 'jamsheelamk@gmail.com',
//             pass: 'Jamshi@1994'
//         }
//     });
//     let mailOptions = {
//         // should be replaced with real recipient's account
//         to: 'jamsheelamk@gmail.com',
//         subject: 'happy diwali',
//         text: 'wish you a happy diwali to your fam'
//     };
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('Message %s sent: %s', info.messageId, info.response);
//     });
//     res.writeHead(301, { Location: 'index.html' });
//     res.end();
//   });


app.listen(port,()=>{console.log("server ready at " +port)});


