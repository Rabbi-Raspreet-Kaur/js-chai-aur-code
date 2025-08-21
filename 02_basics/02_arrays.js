//  ************   Join Arrays   ***************
//  using push

const marvel_heroes = ["Thor", "Spiderman", "Ironman"]
const dc_heroes = ["Flash", "Superman", "Batman"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);


//  using concat

const A1 = marvel_heroes.concat(dc_heroes)
console.log(A1);
// [ 'Thor', 'Spiderman', 'Ironman', 'Flash', 'Superman', 'Batman' ]



//  using spread operator

const New = [...marvel_heroes, ...dc_heroes]
console.log(New);
// [ 'Thor', 'Spiderman', 'Ironman', 'Flash', 'Superman', 'Batman' ]


console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3));
