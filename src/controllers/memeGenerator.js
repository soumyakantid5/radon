const axios=require('axios')

module.exports.getAllMemes=async function(req,res){
    try{
    //let url="https://api.imgflip.com/get_memes"
    let result=await axios.get("https://api.imgflip.com/get_memes")
    res.status(200).send({msg:result.data})
}
catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}
}


module.exports.memeGenerator=async function(req,res){
    try{
    let id=req.query.template_id
    let text0=req.query.text0
    let text1=req.query.text1
    let uname=req.query.username
    let pwd=req.query.password

    let options={
        method:'post',
        url:`https://api.imgflip.com/caption_image?template_id=${id}&text0=${text0}&text1=${text1}&username=${uname}&password=${pwd}`
    }
    let result=await axios(options)
    res.status(200).send({msg:result.data})
}
catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}
}