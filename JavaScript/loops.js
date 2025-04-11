// let sum = 0
// let num = 1
// while(num<=5){
//     sum+=num
//     num++
// }
// console.log(sum);

let val = 5
let countdown = []
while (val >= 1) {
    countdown.push(val);
    val --
}
// console.log(countdown);


// let teaCollection = []
// let str
// do{
//     str = prompt(`Enter your favourite tea : `);
//     teaCollection.push(str)
// }while(str != 'stop')


let total = 0
let val2 = 1
do{
    total += val2
    val2++
}while(val2 <= 3)
// console.log(total);

let arr1 = [2,4,6]
let multipliedNumbers = []
let i = 0
while(i<arr1.length){
    multipliedNumbers.push(arr1[i] * 2)
    i++
}
// console.log(multipliedNumbers);

//--------------------------:)) Challanges on Loops 
let tea = ["greeen tea","black tea","chai","oolong tea"]
let selectedTeas = []
// for(index = 0; index < tea.length; index++){
//     if (tea[index] != "chai") {
//         selectedTeas.push(tea[index])
//     }else{
//         break;
//     }
// }
tea.forEach((element) => {
    if (element == "chai") {
        return
    }
    selectedTeas.push (element)    
});
// console.log(selectedTeas);

// let tea = ["greeen tea","black tea","chai","oolong tea"]
// let selectedTeas = []
// for(index = 0; index < tea.length; index++){
//     if (tea[index] != "chai") {
//         selectedTeas.push(tea[index])
//     }else{
//         continue
//     }
// }
// console.log(selectedTeas);

// for-of loop
// let arr2 = [1,2,3,4,5]
// let smallNumbers = []
// for (const x of arr2) {
//     if (x === 4) {
//         break       
//     }
//     smallNumbers.push(x)
// }
// console.log(smallNumbers);

// ------------------:)Object Iteration
let cityPopulation = {
    "London" : 89000,
    "New York" : 45000,
    "Berlin" : 35000,
    "Paris":23000,
};
let cityPopulations = {}
// console.log(Object.keys(cityPopulation));
// console.log(Object.values(cityPopulation));

// for (const city in cityPopulation) {
//     if (city === 'Berlin') {
//         break
//     }
//     cityPopulations[city] = cityPopulation[city]
//     // cityPopulations.push({x:cityPopulation[x]})
// }
// console.log(cityPopulations);

// let largeCities = {}
// for(const city in cityPopulation){
//     if (cityPopulation[city] < 50000) {
//         continue    
//     }
//     largeCities[city] = cityPopulation[city]
// }
// console.log(largeCities);


let worldcities2 = ["Berlin","Tokyo","Sydney","Paris"]
let traveledCities = []
worldcities2.forEach((city)=>{
    if(city === "Sydney")
        return;
    traveledCities.push(city)
})
// console.log(traveledCities);


chaiArr = ["chai","green tea","black tea","jasmine tea","herbal tea"]
let shortTeas = []
for(const val of chaiArr){
    if(val.length > 10)
        break
    shortTeas.push(val);
}
console.log(shortTeas);




