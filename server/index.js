const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
const cors = require('cors')
const session = require('express-session')
const mongodbstore = require('connect-mongodb-session')(session)
const UserRoute = require('./routes/User');
const HouseRoute = require('./routes/House')
const connectDB = require('./config/db')
const app = express();
// require('dotenv').config({path : __dirname+'/config/config.env'})
const PORT = process.env.PORT;

const store = new mongodbstore({
    uri: process.env.MONGO,
    collection: 'mySessions',
    expires: 100000000000
});

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({ path: __dirname +  "server/config/config.env" });
  }

const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

app.use(session({
    secret: process.env.SESSIONSECRET,
    resave: false,
    saveUninitialized:false,
    store: store
}))


app.use(UserRoute);
app.use(HouseRoute);


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
    });
  }

app.listen(PORT, () => {
    connectDB();
    console.log(`listening at ${PORT}`)
})