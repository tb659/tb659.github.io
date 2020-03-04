const express = require("express")
const serve = express()
serve.use(1122, () => { console.log('ok') })