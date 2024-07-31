// //Program of fizz,buzz and fizz buzz 
// for( let itr=1;itr<=100;itr++){
//     if(itr%3==0 && itr%5!=0){
//         document.write("Fizz");
//     }
//     else if(itr%5==0 && itr%3!=0){
//         document.write("Buzz");
//     }
//     else if(itr%3==0 && itr%5==0){
//         document.write("FizzBuzz");
//     }
// }

// //Program to find the factorial
// function factorial(num){
//     let fact=1;
//     for( let itr=1;itr<=num;itr++){
//             fact=fact*itr;
//         }
//         return fact;
//     }
//         console.log(factorial(5));

// //Program to find largest number in an array
// let arr=[10,2,33,46,56];
// a=arr.sort();
// console.log(arr[arr.length-1]);


// //Program to convert celsius into fahrenheit
// function fahrenheit(celsius){
//     let temp=(celsius-32)*5/9;
//     return temp;
// }
// console.log(fahrenheit(20));

// //Program to check palindrome
// function palindrome (str){
//    let str1=(str.split("").reverse().join(""));
//    if(str==str1){
//     console.log("Palindrome");
//    }
//    else{
//    console.log("Not a palindrome");
//    }
// }
// palindrome("malayalam");

// //Program to find the longest word in a string
// let str="This is myself kavibharathi";
// let words=str.split(" ");
// let longest=" ";
// for(let itr=0;itr<words.length;itr++){
//     if(words[itr].length>longest.length){
//         longest=words[itr];
//     }
// }
// console.log(longest);

// //Program to find occurances of string
// function count(str,char){
//     for(let itr=0;itr<str.length;itr++){
//         if(str[itr]==char){
//             count++;
//         }
//     }
//     return count;
// }
// console.log("kavi",'MK')

//ARRAY CONCEPTS

//1.array creation and initialization
// let fruits=["apple","banana","kiwi","mango"];
// console.log(fruits);

//2.array manipulation
//add elements using push()
// let fruits=["apple","banana","kiwi","mango"];
// fruits.push("pineapple");
// console.log(fruits);
//add elements using unshift()
// let fruits=["apple","banana","kiwi","mango"];
// fruits.unshift("orange");
// console.log(fruits);

//remove elements using pop()
// let fruits=["apple","banana","kiwi","mango"];
// fruits.pop();
// console.log(fruits);
//remove elements using shift()
// let fruits=["apple","banana","kiwi","mango"];
// fruits.shift();
// console.log(fruits);

//3.searching elements using indexof()
// let fruits=["apple","banana","kiwi","mango"];
// console.log(fruits.indexOf("kiwi"));

//4.array sorting
// let arr=[9,8,7,6,5,1];
// console.log(arr.sort());

//5.array flattening
// let arr=[1,2,3,[4,5,6]];
// console.log(arr.flat());

//6.finding maximum
// let arr=[10,20,30,40,50];
// arr.sort();
// console.log(arr[arr.length-1]);
//finding minimum
// let arr=[50,40,30,20,10];
// arr.sort();
// console.log(arr[0]);

//7.array spreading
// let arr1=[1,2,3];
// let arr2=[4,5,6];
// console.log(...arr1,...arr2);


//8.removing array items by index
// let fruits=["apple","mango","banana"];
// fruits.splice(2,0);
// console.log(fruits);

//9.array manipulation with slice()
// let fruit=["apple","mango","banana"];
// let y=fruit.slice();fruit.push("kiwi");
// console.log(fruit);


// 10.array filtering
let arr=["kavi","bharathi","shine","bright"];
let y=arr.filter(arr=>arr.length>5);
console.log(y);

//11.array mapping
let array=[1,2,3,4,5];
let x=array.map(x=>x*2);
console.log(x);
//array mapping to convert into lowercase
let names=["BRIGHT"];
let a=names.map((x)=>x.toLowerCase());
console.log(a);

//12.Array joining
let array1=['bright','dull','shine'];
let a1=array1.join();
console.log(a1);
//array splitting
let a2=("this is myself kavibharathi");
let b=a2.split();
console.log(b);

//13.Merging the arrays
let mes1=["a","b","c"];
let mes2=["d","e","f"];
let d=mes1.concat(mes2);
console.log(d);

//14.finding the longest string in an array
let str="This is kavibharathi";
let words=str.split(" ");
let longest=" ";
for(let itr=0;itr<words.length;itr++){ 
    if(words[itr].length>longest.length){ 
        longest=words[itr];
    }
}
console.log(longest);

//15.array deduplication
let demo=[1,2,3,4,2,3,4];
console.log(...new Set(demo));

//16.finding the index of first occurance
let word=['k','k','a','a','v','i'];
console.log(word.indexOf("k"));

//17.finding intersection of two arrays
let arr1=[1,2,3,4,5];
let arr2=[2,4];
let c=arr1.filter((x)=>arr2.includes(x));
console.log(c);

// 18.rotating an array
function rotateRight(arr, k) {
    k = k % arr.length;
    const rotatedPart = arr.slice(arr.length - k);
    const restOfArray = arr.slice(0, arr.length - k);
return rotatedPart.concat(restOfArray);
}
const array = [1, 2, 3, 4, 5];
const rotations = 2;
const rotatedArray = rotateRight(array, rotations);
console.log(rotatedArray);


// 19.inserting items at a specific position
function insertArrayAt(arr, index, arrayToInsert) {
    return [...arr.slice(0, index), ...arrayToInsert, ...arr.slice(index)];
}
const originalArray = [1, 2, 3, 7, 8, 9];
const arrayToInsert = [4, 5, 6];
const index = 3;
const modifiedArray = insertArrayAt(originalArray, index, arrayToInsert);
console.log(modifiedArray);


// 20.comparing 2 arrays of equality
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((value, index) => value === arr2[index]);
}
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [1, 2, 4];
console.log(arraysEqual(array1, array2))
console.log(arraysEqual(array1, array3))


// 21.creating array of arrays
const arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(arrayOfArrays);


// 22.array destructing
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first);
console.log(second);
console.log(rest);

//23.checking array elements
var fruits=["apple","orange","mango"];
if(fruits.includes("kiwi")){
    console.log("it includes");
}
else{
    console.log("it does not include");
}

//24.array of object sorting
let students=[
    {dob:"11.05.2004",city:"pollachi",score:90},
    {dob:"04.01.2003",city:"dharmapuri",score:95},
    {dob:"10.08.2003",city:"chennai",score:60}
];
students.sort((a,b)=>a.score-b.score);

students.forEach((e)=>{
    console.log(e.score);
})

//25.creating a new array with given length
function NewArray(size) {
    var x = [];
    for (var i = 0; i <= size; ++i) {
        x[i] = i;
    }
    return x;
}
var d = NewArray(10);
console.log(d);

//26.finding intersection of two arrays
let a=[1,2,3,4,5];
let b=[3,4,5,6,7];
let result=a.filter((element)=>b.includes(element));
console.log(result);

//27.finding the difference between two arrays
let arr1=[1,2,3,4,5];
let arr2=[1,2,6,7];
let ans=arr1.filter((element)=>!arr2.includes(element));
console.log(ans);









