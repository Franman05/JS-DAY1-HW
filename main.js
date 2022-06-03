//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
console.log(dog_names[0])

function findWords(string, array){
    for (let arrays in array){
        string.includes(arrays) ? console.log('Matched' + array) : console.log('No match')
    };
};
findWords(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

given_arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for (let i in arr){
        if (i % 2 == 0){
            arr.splice(i, 1, 'even index')
        }
    };
    return arr
};
console.log(replaceEvens(given_arr))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// CODEWARS PROBLEMS

//Beginner - Lost Without a Map (1)
/*Given an array of integers, return a new array with each value doubled.
//For example:
[1, 2, 3] --> [2, 4, 6]*/

x = [1, 2, 3]
function maps(){
    return x.map(n => n * 2);
  }
console.log(maps())

//Opposites Attract (2)
/*Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.*/

function lovefunc(flower1, flower2){
    if(flower1 % 2 == 0 && flower2 % 2 == 1){
      return true;
    }
    if(flower1 % 2 == 1 && flower2 % 2 == 0){
      return true;
    }
    else{
      return false;
    }
  }
console.log(lovefunc())

//Beginner - Reduce but Grow (3)
/*Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24*/

x = [1, 2, 3, 4]
function grow(){
    return x.reduce((res,n)=> res*n);
  }
console.log(grow())

//Sum Arrays (4)
/*Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398*/

function sum(numbers) {
    let total = 0
    for (let i = 0; i < numbers.length; i++){
      total += numbers[i];
    }
    return total
};
console.log(sum([]), 0)
console.log(sum([1, 5.2, 4, 0, -1]))