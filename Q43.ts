
//Question 43

function makeGreat(magicians: string[]): string[] {
  // Create a copy of the original array
  const greatMagicians: string[] = magicians.slice();

  // Add 'Great' to each magician's name in the new array
  for (let i = 0; i < greatMagicians.length; i++) {
    greatMagicians[i] = "Great " + greatMagicians[i];
}

return greatMagicians;
}

function showMagicians(magicians: string[]): void {
// Display the magicians' names
for (const magician of magicians) {
    console.log(magician);
}
}

// Original array of magicians' names
const originalMagicians: string[] = ["Merlin", "Houdini", "David Copperfield"];

// Create a new array with 'Great' added to each magician's name
const greatMagicians: string[] = makeGreat(originalMagicians);

// Show both arrays
console.log("Original Magicians:");
showMagicians(originalMagicians);
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);