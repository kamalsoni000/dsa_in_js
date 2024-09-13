// a string is a data type used to represent text. A string is a sequence of characters enclosed in single quotes ('...'), 
// double quotes ("..."), or backticks (`...`). Strings can contain letters, digits, symbols, and whitespace characters.

// We can access individual characters of a string using array-like syntax in JS

// Basic String Operations with Implementation 

// ------------- Accessing characters by index in a string ----------------

// const text="KamalSoni";

// function accessCharacterByIndex(str,key){
//     return str[key];
// }

// console.log('index',accessCharacterByIndex(text,4));

// -------------- Inserting Character/String into an String ----------------

// const text="KamalSoni";

// function insertCharacterAtIndex(text,pos,newStr){
//     let newString=text.slice(0,pos)+newStr+text.slice(pos);
//     return newString;
// }

// console.log('Result is :',insertCharacterAtIndex(text,5,"singh"));

// --------------- Modifying character in String ------------------

// let text = "kamal Singh";

// function modifyString(text,pos,newStr){
//     let newText=text.substr(0,pos)+newStr+text.substr(pos+1);
//     return newText;
// }

// console.log("modifyString",modifyString(text,2,'H'));


//Deletion of character in String


// delete by char in string
// function deleteString(txt,char) {
//     return txt.split(char).join('');
// }
// console.log("deleteString",deleteString("kamal",'k'));

// delete by index in string
// function deleteStringbyIndex(txt, index) {
//     return txt.slice(0, index)+txt.slice(index+1);
// }

// console.log("deleteString",deleteStringbyIndex("kamal",3));

// Concatenating strings (combining multiple strings into one).

// function addString(first,second) {
//     return first+second;;
// }

// console.log("addString",addString("kamal"," soni"));

// Comparing Strings for Equality

// function compareString(first,second){
//     if(first.length!=second.length){
//         return false;
//     }
//     for(let i=0;i<first.length;i++){
//         if(first[i]!==second[i]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log("compareString",compareString("kamal","aamal"));
// Time Complexity: This approach has a time complexity of O(n), where n is the length of the strings. If the strings differ 
// early on, the loop exits early, making the process efficient in practice.

// ------------------ Example --------------------------------

// 1. Input :  abcd
// Output :  a 
//           b
//           c
//           d
//           ab
//           bc
//           cd
//           abc
//           bcd
//           abcd

function printAllSubstrings(str) {
    // Outer loop controls the length of the substring (1 to length of the string)
    for (let len = 1; len <= str.length; len++) {
      // Inner loop controls the starting index of the substring
      for (let i = 0; i <= str.length - len; i++) {
        // Print substring from index 'i' of length 'len'
        console.log(str.substring(i, i + len));
      }
    }
  }
  printAllSubstrings("abcd");