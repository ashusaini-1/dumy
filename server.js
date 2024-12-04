const app = require("./app");
const process = require('node:process');

const connectDatabase=require("./db");

connectDatabase();

const PORT = process.env.port || 8000;
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})