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


