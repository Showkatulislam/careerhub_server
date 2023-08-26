const { default: mongoose } = require("mongoose");
const app = require("./app");
require('dotenv').config()

mongoose.connect(process.env.DATABASELOCAL)
.then(()=>{
    console.log('connected');
}).catch(err=>{
    console.log(err.message);
})
const port = process.env.PORT || 8080;

app.listen(port,()=>{
    console.log('SERVER IS RUNNING AT PORT 5000');
})
