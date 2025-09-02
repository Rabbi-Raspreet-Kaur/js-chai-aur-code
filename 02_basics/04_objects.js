// constructors

//const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123wer"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(tinderUser);                 //{ id: '123wer', name: 'Sam', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hiten",
            lastname: "chauhan"
        }    
    }
}

console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = Object.assign({}, obj1, obj2)             //assign(target: {}, source1: { 1: string; 2: string; }, source2: { 3: string; 4: string; })
console.log(obj3);                                     //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }



const course= {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor       -- this is also fine but sometimes gets too long 


const {courseInstructor: instructor} = course

console.log(instructor);                              // output = hitesh


