let computer = {cpu : 12, display : '4K'} //template
let lenovo = {
    screen : "HD",
    __proto__ : computer,
}
let tomHardware = {}

console.log(`Computer `,computer.__proto__);
console.log(`Lenovo `,lenovo.__proto__);

