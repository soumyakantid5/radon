let d=new Date(2022,5,1)

let printDate=function(){
    console.log(d.toDateString());
} 
var printMonth=function(){
    console.log(d.toLocaleString('default', { month: 'long' }));
} 
const getBatchInfo=function(){
    console.log("batch information to be updated")
}
module.exports.printDate=printDate;
module.exports.prinMonth=printMonth;
module.exports.getBatchInfo=getBatchInfo;