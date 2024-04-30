//Question 41



function showMagicians(magicians: string[]): void {
  magicians.forEach((magician) => {
     console.log(magician);
  });
}

//Array of magician names
const magicianNames: string[] = ["David Copperfield", "David Blaine", "Penn Jillette", "Teller"];

//Call the function to show magician names
showMagicians(magicianNames);