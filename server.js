const express = require('express')
const cors = require('cors');
const app = express()
const dotenv = require('dotenv');
dotenv.config();


app.use(cors())
app.set('view engine', 'ejs');
app.set('trust proxy', true)

app.get('/',function(req,res){
    let ip;
    if (req.headers['x-forwarded-for']) {
        ip = req.headers['x-forwarded-for'].split(",")[0];
    } else if (req.connection && req.connection.remoteAddress) {
        ip = req.connection.remoteAddress;
    } else {
        ip = req.ip;
    }
    res.json({
        ip: ip
    })
});

app.listen(process.env.PORT, () => {
    console.log(`app listening on port ${process.env.PORT}`)
})
