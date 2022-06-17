let axios = require("axios")

module.exports.getWeatherByCity=async function(req,res){
    try{
    let city=req.query.q
    let appid=req.query.appid
let options={
    method:'get',
    url:`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
}
let result=await axios(options)
console.log(`Temparature of ${result.data.name}=${Math.round((result.data.main.temp)-273.15)}`)
res.status(200).send({msg:result.data})
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

module.exports.getTempSorted=async function(req,res){
    try{
    let appid="fbfd379af07a57f3ef1cc5833e395264"
let cities=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
let tempByCity=[]
for(let i=0;i<cities.length;i++){
let obj={city:cities[i]}
let result=await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appid}`)
obj.temp=result.data.main.temp
tempByCity.push(obj)
}
let sorted=tempByCity.sort((a,b)=>a.temp-b.temp)
res.status(200).send(sorted)
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
