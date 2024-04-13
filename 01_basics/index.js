const dotenv = require("dotenv")
const {app} = require("./app")
const connectDB = require("./db_connect")
const port = process.env.PORT || 3020;

dotenv.config({ path: './.env' }) // These variables are saved in node.js environment variable

// console.log(process.env);
// console.log(app.get('env'));
connectDB()
.then(() => {
    app.listen(port, () => {
        console.log("Server is listening on port", port);
    })
}).catch((err) => {
  console.log('DB Conection Failed', err);
});