//Question 45

interface Car {
  manufacturer: string;
  model: string;
  [key: string]: any; // Allow arbitrary key-value pairs
}

function createCar(manufacturer: string, model: string, ...extras: [string, any][]): Car {
  const car: Car = {
      manufacturer,
      model
  };

  // Add additional properties
  for (const extra of extras) {
      const [key, value] = extra;
      car[key] = value;
  }

  return car;
}

// Call the function with required information and additional properties
const myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

// Print the returned object
console.log(myCar);