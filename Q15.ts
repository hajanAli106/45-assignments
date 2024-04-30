//Question 15 

let logs : string[]= ["zeeshan", "ronaque", "shahzain", "musharaf"];
let unableToattend : string = "zeeshan";
console.log(`${unableToattend} can't make it to lunch .`);

//replace the guest
let newguest :string =  "faraz";
logs[logs.indexOf(unableToattend)] = newguest;

//new invitations 
logs.forEach(guest => {console.log(` dear ${guest},would you like to join me for lunch?`);});
