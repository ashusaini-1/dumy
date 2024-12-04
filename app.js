const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require("cookie-parser")

app.use(express.json());
app.use(cookieParser());
app.use(cors())

//admin

const adminRoutes = require("./routes/admin/adminRoutes")


//user
const userRoutes = require("./routes/app/userRoutes")




//admin
app.use("/admin", adminRoutes);


//user
app.use("/api", userRoutes)



module.exports = app;


