const express = require('express')
const app = express()

app.use(express.json())

const PORT = 5000

const vaisiai = require('./modules/data.js')

console.log(vaisiai)

app.get('/this/is/my/route', (request, response)=>{
    response.send(vaisiai)
})

app.get('/this/is/my/route/:id', (request, response) => {
    const vaisius = vaisiai.find((vais) => vais.id === parseInt(request.params.id)
    )
    if (!vaisius) {
        response.status(404).send("not found")
    }
    response.send(vaisius)
})

app.post('/this/is/my/route/:id', (req, res) => {
    const naujasVaisius = {
        id: vaisiai.length + 1,
        title: 'superNaujasVaisius',
    }

    vaisiai.push(naujasVaisius)
    res.send(vaisiai)
})

app.put('/this/is/my/route/:id', (req, res) => {
    const vaisius = vaisiai.find(
        (vais) => vais.id === parseInt(req.params.id)
    )
    if (!vaisius) {
        res.status(404).send('not found')
    }

    vaisius.title = req.body.title

    res.send(vaisius)
})

app.delete('/this/is/my/route/:id', (req, res) => {
    const vaisius = vaisiai.find(
        (vais) => vais.id === parseInt(req.params.id)
    )
    if (!vaisius) {
        res.status(404).send('not found')
    }
    const vaisiusIndex = vaisiai.indexOf(vaisius)
    vaisiai.splice(vaisiusIndex, 1)

    res.send(vaisius)
})



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT} port.`)
})

