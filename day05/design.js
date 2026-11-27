console.log("Day 05")
//addition of even number
// let sum = 0; 
// for(let i=1;i<=100;i++){
//    if(i%2===0){
//     // console.log("i",i)

//     sum=sum+i;

//    } 
// }
// console.log(sum+" the sum is");

let language = "javascript";
 for(let i =0;i< language.length;i++){
    console.log(language.charAt(i))
 }
 

 //break
 for(let i =1;i<5;i++){
    if(i===3){
        break;
    }
    console.log(i)
 }

 //continue

 for(let i=1;i<=5;i++){
    if(i===3){
        continue;
    }

    console.log(i)
 }

  for( let i =1,j=10;i<=10 && j>=1;i++,j--){
    console.log(i,j)
  }


   //task 01
//    *
//    **
//    ***
//    ****
//    *****

for(let col = 0;col<=5;col++){
    let pattern=" ";
    for(let row=0;row<=col;row++){
        pattern += " *";
    }
    console.log(pattern);
}

//task02

let n=3;
for(let i=1;i<=10;i++){

    console.log(`${n} X ${i} = ${n*i}`)
}

//task03
let sum = 0;
for (let i = 1; i <= 500; i++) {
  if (i % 2 === 0) {
    // console.log("i",i)

    sum = sum + i;
  }
}
console.log(sum + " the sum is");

//task04
for(let i=1;i<=20;i++){
    if(i%3===0){
        continue;
    }

    console.log(i);
}


//task05
let input=12345;
let text=String(input);
let reversed="";
let i= text.length-1;
while(i>=0){
    reversed+=text[i];

}
console.log(reversed);
