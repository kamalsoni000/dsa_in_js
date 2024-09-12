// Search, Insert, and Delete in an Unsorted Array | Array Operations

// Coding implementation of the search operation:

// Javascript program to implement linear 
// search in unsorted array


// function findElement (arr,n,key){
//     for(let i=0;i<n;i++){
//         if(arr[i]==key){
//             return i;
//         }
//     }
//     return -1;
// }

// let arr=[1,4,2,13,11,34,21,211];
// let n=arr.length;

// // Using a Key element as search element
// let key=21;
// let position=findElement(arr,n,111);

// if(position==-1){
//     console.log('cant able to find element');
// }else{
//     console.log(`Element ${key} found at : ${position +1} position`);
// }

// Time Complexity: O(N) 
// Auxiliary Space: O(1)


// ----------Coding implementation of inserting an element at the end---------

// let data=[1,12,44,2,4,5,13,88];

// let num=999;

// function inertAtEnd(arr,key){
//     let newArr=new Array(arr.length +1);
//     for(let i=0;i<arr.length;i++){
//         newArr[i]=arr[i];
//     }
//     newArr[arr.length]=key;
//     return newArr;
// };

// const res=inertAtEnd(data,num);
// console.log("Final Result: ",res);

// Time Complexity: O(N) 
// Auxiliary Space: O(1)

// -------- Coding implementation of inserting an element at any position:-------
let data=[1,12,44,2,4,5,13,88];
let num=222;
let pos=2;

function insertAtPos(arr,key,pos){
    let newArr=new Array(arr.length+1);
    for(let i=0;i<pos;i++){
        newArr[i]=arr[i];
    }
    newArr[pos]=key;
    for(let i=pos;i<arr.length;i++){
        newArr[i+1]=arr[i];
    }
    return newArr;
}
const res=insertAtPos(data,num,pos);

console.log(res);