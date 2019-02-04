var http = require('http');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

var connect = require('connect');

var app = connect();
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
 extended: true
}));
sendemail = function(request, response, next){
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		  auth: {
		    user: 'projectlifeshare@gmail.com',
		    pass: 'Abhi@199718',
		    host: 'smtp.gmail.com',
		    ssl: true
		  }
	});
	var mailOptions = {
			from: 'projectlifeshare@gmail.com',
			to: 'projectlifeshare@gmail.com', //get from form input field of html file
			subject: 'Mail From New Customer',
			text: request.body.email,
	};
		transporter.sendMail(mailOptions, function(error, info){
		  if (error) {
		    alert(error);
		  } else {
		    alert('Email sent: ' + info.response);
		  }
		});
		next();
};
app.use("/sendemail", sendemail);
http.createServer(app).listen(8888);
console.log("Server is listening......!!");


