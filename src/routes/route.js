const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const WeatherController= require("../controllers/weatherController")
const MemeController= require("../controllers/memeGenerator")

router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.post("/cowin/getOtp", CowinController.getOtp)

router.get("/cowin/getByDistrictId",CowinController.getByDistrictId)

router.get("/getWeatherByCity",WeatherController.getWeatherByCity)
router.get("/getTempSorted",WeatherController.getTempSorted)

router.get("/getAllMemes",MemeController.getAllMemes)
router.post("/memeGenerator",MemeController.memeGenerator)

module.exports = router;