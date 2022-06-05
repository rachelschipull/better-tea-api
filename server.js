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
        'caffeinated': true,
    },
    'matcha':{
        'type': 'green',
        'origin': 'japan',
        'steepTimeSeconds': 60,
        'waterTemp': 160,
        'caffeinated': true,
    },
    'puer':{
        'type': 'black',
        'origin': 'china',
        'steepTimeSeconds': 15,
        'waterTemp': 210,
        'caffeinated': true,
    },
    'silverleaf':{
        'type': 'white',
        'origin': 'china',
        'steepTimeSeconds': 90,
        'waterTemp': 180,
        'caffeinated': true,
    },
    'darjeeling':{
        'type': 'black',
        'origin': 'india',
        'steepTimeSeconds': 120,
        'waterTemp': 210,
        'caffeinated': true,
    },
    'assam':{
        'type': 'black',
        'origin': 'india',
        'steepTimeSeconds': 120,
        'waterTemp': 210,
        'caffeinated': true,
    },
    'jasmine':{
        'type': 'green',
        'origin': 'china',
        'steepTimeSeconds': 90,
        'waterTemp': 180,
        'caffeinated': true,
    },
    'gyokuro':{
        'type': 'green',
        'origin': 'japan',
        'steepTimeSeconds': 90,
        'waterTemp': 160,
        'caffeinated': true,
    },
    'kukicha':{
        'type': 'green twigs',
        'origin': 'japan',
        'steepTimeSeconds': 120,
        'waterTemp': 180,
        'caffeinated': true,
    },
    'lapsang souchang':{
        'type': 'smoked black',
        'origin': 'china',
        'steepTimeSeconds': 120,
        'waterTemp': 200,
        'caffeinated': true,
    },
    'chai':{
        'type': 'spiced black',
        'origin': 'india',
        'steepTimeSeconds': 120,
        'waterTemp': 180,
        'caffeinated': true,
    },
    'yerba mate':{
        'type': 'herbal',
        'origin': 'paraguay',
        'steepTimeSeconds': 120,
        'waterTemp': 170,
        'caffeinated': true,
    },
    'rooibos':{
        'type': 'herbal',
        'origin': 'south africa',
        'steepTimeSeconds': 120,
        'waterTemp': 180,
        'caffeinated': true,
    },
    'tisane':{
        'type': 'white',
        'origin': 'china',
        'steepTimeSeconds': 240,
        'waterTemp': 200,
        'caffeinated': true,
    },
    'unknown':{
        'type': 'unknown',
        'origin': 'unknown',
        'steepTimeSeconds': 0,
        'waterTemp': 0,
        'caffeinated': false,
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