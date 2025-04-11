let topcities = ["Berlin","Singapore","New York"]
// Creating soft copy, Changes occure in both the array
let softcopy = topcities
softcopy.pop()
// console.log(topcities);
// console.log(softcopy);

// Creating hard copy, changes occur in only the array
let harcopy = [...topcities] //First Way
topcities.push("Banaras")
// console.log(harcopy);
// console.log(topcities);
let anotherhardcpy = topcities.slice; // Another way
// console.log(harcopy);
// console.log(topcities);

//----------------------------------:)Merging array
let europeancities = ["Paris","Rome"]
let asiancities = ["Tokyo","Bankok"]

// let worldcities = europeancities+asiancities //Not good way
// console.log(worldcities);

// worldcities = europeancities.concat(asiancities) // Good Way
// console.log(worldcities);

// 2d array got created
worldcities = [europeancities,asiancities];
console.log(worldcities);


// Length of  an array
let teaMenu = ["masala chai","green tea","earl grey"]
let menuLength = teaMenu.length;
console.log(menuLength);

cityBucketList = ["Kyoto","London","Cape Town","Vancouver"]
let isLondonInList = cityBucketList.includes("London")
console.log(isLondonInList);



