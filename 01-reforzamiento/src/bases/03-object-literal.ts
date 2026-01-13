interface Hero {
  firstName: string;
  lastName: string;
  age: number;
  address?: Address;
}

interface Address {
  zipCode: number;
  city: string;
}

const ironman: Hero = {
  firstName: "Tony",
  lastName: "Stark",
  age: 45,
  address: {
    zipCode: 14001,
    city: "New York",
  },
};

const spiderman: Hero = {
  firstName: "Peter",
  lastName: "Parker",
  age: 22,
  //   address: {
  //     zipCode: 14002,
  //     city: "Quiche",
  //   },
};

console.log(ironman, spiderman);

// const spiderman = structuredClone(ironman);

// spiderman.firstName = "Peter";
// spiderman.lastName = "Parker";
// spiderman.age = 22;
// spiderman.address.city = "Quiche";

// console.log(ironman, spiderman);
