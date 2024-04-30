//Question 30

let usernames: string[]= ["admin", "eric", "sara", "john", "aleza"];

for (let username of usernames){
  if(username === "admin"){
   console.log("hello admin would you like to see a status report");
    
 }else console.log(`hello ${username}, thank you for logging in .`);
  
}
