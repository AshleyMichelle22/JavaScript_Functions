

// Exercise 1 Section
function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2  != 0) {
            console.log(i);
        }
        
    }
}

printOdds(10); // 1-9  1.3.5.7.9
printOdds(100); // 1-99  1,3,5,99

console.log(`-------`);
console.log(` Exercise 2`);
// Exercise 2 Section
function checkAge(name, age){ //initialize variables
    let oldEnough = `Congrats ${name}! You can drive!`;
    let tooYoung = `Sorry ${name}, you are too young to drive.`;
    if(age < 16){
        console.log(tooYoung);
    }else{
        console.log(oldEnough);
    }
}

checkAge("Ashley", 17)
checkAge("Donnie", 15)
checkAge("Mayci", 9)
checkAge("Asa", 6)

function oldEnough(name, age){ //initalize variuables
    return age >= targetAge;
}
function checkLicense(name, age) {
    let canDrive = oldEnough (age, 16);
    let canHavePermit = oldEnough(age, 15);
    let canDrink = (age, 21);

    if (canDrink) {
        console.log(`${name} can drink. ${name} can also drive. Do not drink AND drive.`);
     
    }else if (canDrive) {
        console.log(`${name}can drive.`);
    }else if (canHavePermit){
        console.log (`${name} can drive with a person over 18.`);
    }else {
        console.log(`${name} too young. Wait a couple of years.`);
    }
}


console.log(`-------`);
// Exercise 3 Section // 4 quadrents-- think abdomin
console.log(` Exercise 3`);
function checkQuadrent(x, y){
    let quadrent;
    if(x > 0 && y > 0) {  // if x is greater then 0, and y is greater then 0
       return  "Quadrent 1"; 
       
    }else if(x < 0 && y > 0) {
        return "Quadrent 2";

    }else if (x < 0 && y < 0) {
        return "Quadrent 3";

    }else if (x > 0 && y < 0) {
        return "Quadrent 4";

    }else if (x == 0 && y != 0){
        return "X Axis";

    }else if (x != 0 && y == 0) {// if x is NOT (!) equal to 0, nut Y is equal == true equal
         return "Y Axis";

    } else{
        return "origin";
    }
}
console.log(checkQuadrent(1, 1)); // quad 1 ++
console.log(checkQuadrent(-1, 1)); // quad 2 -+
console.log(checkQuadrent(-1, -1));// quad 3 --
console.log(checkQuadrent(1, -1));// quad 4 +-
console.log(checkQuadrent(0, -1));// x axis +-
console.log(checkQuadrent(1, 0));// y axis
console.log(checkQuadrent(0, 0));// orig

console.log(`-------`);
// Exercise 4 Section type of trianle 
console.log(` Exercise 4`);

function triangleIsValid(a, b, c){
   return  a + b > c && a + c > b && b + c > a;
    
  }

function checkTriangle(a, b, c){
 let isValid = triangleIsValid(a, b, c)

   if (isValid) {
    // true- what type of triabgle, checks sides
    if (a == b && b == c){
        return `Equailateral`;
      }else if( a == b || b == c || a == c) {
         return `Isosceles`;
    }else{
        return `scalebe`;
    }

    } else {
        return ` Triangle not valid.`;
   }
   
 
}
console.log(checkTriangle(2, 3, 4)); //scal
console.log(checkTriangle(2, 2, 2));// equal
console.log(checkTriangle(1, 2, 2));//Isos
console.log(checkTriangle(1, 1, 2)); //nonv


// Exercise 5 Section
// planLimit, day, usage 
console.log(`-------`);
console.log(` Exercise 5`);

function dataUsed( planLimit, day, usage){
    let periodLength = 30; // definded variable- peroid length is 30 days
     console.log(`${day} day(s) used, ${periodLength - day} day(s) remaining.`);
     console.log(`Average daily use: ${usage/ day} GB/day`);// how much used day


}   

 dataUsed(50, 12, 25);
//  planlimit, day, usage 




//1. Write a function that will display feedback on cell phone data usage. Cell phone
// plans for this particular company give you a certain amount of data every 30 days
// which must be used or they are lost (no rollover). We want to track the average amount of data
//  used per day and inform the user if they are using too much data or can
// afford to use more.

// Write a function that accepts the following parameters:

// - `planLimit`: amount of data in the plan per 30 day period
// - `day`: the current day in the 30 day period
// - `usage`: the total amount of data used so far

// The function should compute whether the user is over, under, or right on the average
// daily usage under the plan. It should also inform them of how much data is left
// and how much, on average, they can use per day for the rest of the month. If
// they’ve run out of data, it should inform them of that too.

// For example, if the user enters `planLimit = 100`, `day = 15`, and `usage = 56`, your program should print
// out something similar to the following.

// ```txt
// 15 days used, 15 days remaining
// Average daily use: 3.333 GB/day
// You are EXCEEDING your average daily use (3.73 GB/day),
// continuing this high usage, you'll exceed your data plan by
// 11.9 GB.
// To stay below your data plan, use no more than 2.93 GB/day.


