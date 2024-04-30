//Qestion 22


let arry: number[] = [1, 2, 3, 4, 5];

try{console.log(arry[7]);}
catch (error){
  console.error("an erorr occured", error);
console.log("accessing the last element instead:",arry[arry.length -1]);

}
