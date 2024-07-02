const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();

const email1 = "am.3443rrrr@gmail.com";
const pass = "wiqsjsacziorvhtt";

const port = process.env.port || 3000;

var corsOptions = {
	origin: "https://portfolio-ahmed-m32.vercel.app",
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
	res.send("email portfolio server");
});

app.post("/", (req, res) => {
	console.log(req.body);
	const transporter = nodemailer.createTransport({
		service: "gmail",
		host: "smtp.gmail.com",
		port: 465,
		secure: true,
		auth: {
			user: email1,
			pass: pass
		},
	});

	const data = {
		from: req.body.address,
		to: email1,
		subject: "Portfolio Email",
		text: req.body.message
	};

	transporter.sendMail(data, (error, success) => {
		if (error) {
			console.log(error);
			res.send("there was a problem");
		} else if (success) {
			console.log("success");
			res.send("email sent " + success.response);
		}
	});
});

app.listen(port, () => {
});
