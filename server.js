const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')

app.use(cors())

const tea = {
    'oolong':{
        'type': 'black',
        'origin': 'taiwan',
        'steepTimeSeconds': 180,
        'waterTemp': 200,
        'caffinated': true,
    },
    'matcha':{
        'type': 'green',
        'origin': 'japan',
        'steepTimeSeconds': 60,
        'waterTemp': 160,
        'caffinated': true,
    },
    'puer':{
        'type': 'black',
        'origin': 'china',
        'steepTimeSeconds': 15,
        'waterTemp': 210,
        'caffinated': true,
    },
    'silverleaf':{
        'type': 'white',
        'origin': 'china',
        'steepTimeSeconds': 90,
        'waterTemp': 180,
        'caffinated': true,
    },
    'unknown':{
        'type': 'unknown',
        'origin': 'unknown',
        'steepTimeSeconds': 0,
        'waterTemp': 0,
        'caffinated': false,
    }
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res)=>{
    const teaName = req.params.name.toLowerCase()
    if ( tea[teaName] ){
        res.json(tea[teaName])
    }else{
        res.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log (`The server is running on port ${PORT}, better catch it!`)
})