//Question 32

let currusers: string[] = ["eric", "emma", "john", "mike", "aleza"];
let newusers: string[] = ["eric", "emma", "aleza", "sara", "chris"];

let currusersLower: string[] = currusers.map(user => user.toLowerCase());

for (let user of newusers){
  let isTaken: boolean = currusersLower.includes(user.toLowerCase());
  if (isTaken){
    console.log(`the username '${user}' is not availble. please enter a new username.`);
  }else{console.log(`the username '${user}' is available`);
 }
}
