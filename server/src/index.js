const dotenv = require( "dotenv");
const express = require( "express");
const { json } = require("body-parser");
const cookieSession = require("cookie-session");

const { authRouter } = require('./routes/authRoutes');
const { mailRouter } = require('./routes/mailRoutes');
const { currentUser } = require('./middlewares/currentUser');

dotenv.config();
const app = express();
// traffic is being proxied to our app through NGINX -
// express will be familiar with https & proxy.
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false, // no need, because jwt is already encrypted
    secure: process.env.NODE_ENV !== "test", // https connection requirement - considering TEST ENV
    maxAge: 10000,
  })
);

app.use(currentUser);
app.use(authRouter);
app.use(mailRouter);

app.all("*", () => {
  throw new Error('error was found');
});

app.listen(process.env.PORT, () => console.log("app listens to port", process.env.PORT || '4003'));