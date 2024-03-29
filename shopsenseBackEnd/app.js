const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(cookieParser());

const cors = require('cors');
app.use(cors());

// app.use(cors({origin:'https://e-commerce-site-for-visually-impaired-people.vercel.app/'}));


const errorMiddleware = require("./middleware/error");

//Routes import

const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute")


app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);


// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;