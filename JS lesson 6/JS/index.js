//Objects 
//We create a new object
const userDetails = {
   userName: "Richard",
   age : 25,
   married : false,
   purchases : ["Phone", "Car", "Laptops"],

   sayuserName:function (){
    console.log(this.userName);
   }

};

userDetails.sayuserName(); 

console.log(userDetails.purchases);

function Banana () {
    console.log("mybananas");
}

console.log(this)


//const Userdetails = {
//    name: "Rainer",
//    age: 26,
//    gender: "Male",
//    city: "Berlin"
//}

//Try your hands on creating different functions (10) and observe it in your window object.

//Loops 
//for Loop
const students = ["Adeleke" , "Gene" , "Richard" , "Ashinze" , "Joy" , "Damon" , "Stefan"];

for(student of students) {

    console.log(student);
    console.log(`Hello there ${student}`);
    if (student === "Gene") {

        console.log("Gene is one of the students");
        break;
    }

};


//Presentation to explain "for loop", showing how to operate it and Objects and what they are, the keyword "this" and how it is a window object.
//How we can work around and terminate, print out "for loops"
