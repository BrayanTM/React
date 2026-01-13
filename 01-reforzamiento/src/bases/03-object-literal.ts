const ironman = {
  firstName: "Tony",
  lastName: "Stark",
  age: 45,
  address: {
    zipCode: 14001,
    city: "New York",
  },
};

const spiderman = structuredClone(ironman);

spiderman.firstName = "Peter";
spiderman.lastName = "Parker";
spiderman.age = 22;
spiderman.address.city = "Quiche";

console.log(ironman, spiderman);
