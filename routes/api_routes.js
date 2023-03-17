const express = require('express')
const mongoose = require('mongoose')
const Sensors = require('../models/dbmodel')
const Bulbs = require('../models/bulbmodel')

const router = express.Router()

router.post('/', async function (req,res){

    const {temperature,humidity,moisture,ppm} = req.body

    try {
        const sensordata = await Sensors.create({ temperature, humidity, moisture,ppm })
        res.status(200).json(sensordata)
      } catch (error) {
        res.status(400).json({ error: error.message })
      }
})
router.post('/bulb', async function (req,res){

    const {bulb} = req.body

    try {
        const bulbdata = await Bulbs.create({ bulb})
        res.status(200).json(bulbdata)
      } catch (error) {
        res.status(400).json({ error: error.message })
      }
})

router.get('/bulb/:id',async function (req,res){
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such Id found'})
      }
      const dataBulb = await Bulbs.findById(id);
       if (!dataBulb) {
        return res.status(400).json({error: 'No such Sensor'})
      }
    
      res.status(200).json({"bulb":dataBulb.bulb})
    

})
router.put('/bulb/:id',async function (req,res){
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such Id found'})
      }
      const dataBulb = await Bulbs.findOneAndUpdate({_id: id}, {
        ...req.body
      })
       if (!dataBulb) {
        return res.status(400).json({error: 'No such Sensor'})
      }
    
      res.status(200).json({"bulb":dataBulb.bulb})
    

})
router.put("/:id",async function (req,res){
    const { id } = req.params
    // const {temperature,humidity,moisture,ppm} = req.body
    console.log(id);

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({error: 'No such Id found'})
      }

      const sensorData = await Sensors.findOneAndUpdate({_id: id}, {
        ...req.body
      })
    
      if (!sensorData) {
        return res.status(400).json({error: 'No such Sensor'})
      }
    
      res.status(200).json(sensorData)
    
})


module.exports = router