let d=new Date(2022,5,1)

let printDate=function(){
    console.log(d.toDateString());
} 
var printMonth=function(){
    console.log(d.toLocaleString('default', { month: 'long' }));
} 
const getBatchInfo=function(){
    console.log("Radon Batch 3rd Week 3rd Day.")
    console.log("Topics Discussed Today :")
    console.log("Introduction to Node Js  ... How npm installations are done... how to create a module & how to import it..how to run node 1st program on Node.. ")
}
module.exports.printDate=printDate;
module.exports.prinMonth=printMonth;
module.exports.getBatchInfo=getBatchInfo;