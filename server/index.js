const express = require('express')
const app = express()
const port = 3000
const controllers = require('../server/controllers')

const json = express.json()
app.use(json)

app.get('/entries/:page', controllers.getLogs)
app.get('/logs/:date', controllers.getLog)
app.post('/logs/date', controllers.checkLog)
app.post('/logs', controllers.addLog)
app.post('/country', controllers.addCountry)
app.get('/country', controllers.getCountries)
app.delete('/country/:country', controllers.deleteCountry)
app.post('/message', controllers.shareCountry)

app.use(express.static('client/dist'))


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})


