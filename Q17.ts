//Question 17 

let guests: string[]= ["ronaque", "zeeshan", "musharaf"];
console.log("great news ! I found a bigger table !");


// removing  guests
guests.unshift("faraz");
guests.splice(guests.length / 2, 0, "shahjan");
guests.push("shahzain");
guests.pop();

guests.forEach(guest => {console.log(`dear ${guest}, i cant invite you lunch!`);});