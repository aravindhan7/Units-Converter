let output1=document.getElementById("length-desc")
let output2=document.getElementById("volume-desc")
let output3=document.getElementById("mass-desc")

let entry=document.getElementById("entry")
let button=document.getElementById("btn")
const meterToFeet =  3.281 
const feetToMeter =  0.3048

const literToGallon = 0.264
const gallonToLiter = 3.78541

const kiloToPound =  2.204 
const poundToKilo =  0.453592

button.addEventListener("click",function(){
let baseValue=entry.value

output1.innerHTML=`${baseValue} meters = ${(baseValue*meterToFeet).toFixed(2)} feet 
| ${baseValue} feet = ${(baseValue*feetToMeter).toFixed(2)} meter`

output2.innerHTML=`${baseValue} liters = ${(baseValue*literToGallon).toFixed(2)} gallons 
| ${baseValue} gallons = ${(baseValue*gallonToLiter).toFixed(2)} liters`

output3.innerHTML=`${baseValue} kilos = ${(baseValue*kiloToPound).toFixed(2)} pounds 
| ${baseValue} pounds = ${(baseValue*poundToKilo).toFixed(2)} kilos`
})