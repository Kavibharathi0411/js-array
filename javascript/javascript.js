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







