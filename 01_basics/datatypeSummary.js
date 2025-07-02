
//#####################################################################
//   memory


//Stack (Primitive), Heap(Non_Primitive)

let myYoutubename = "moondotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "moon@google.com",    //don't forget commas
    upi: 'user@ybl'
}

let userTwo = userOne

userTwo.email = "rabbi@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//heap memory = ye temporary store krdeti h stack se value lekr aur uska reference isi mei deti hai.