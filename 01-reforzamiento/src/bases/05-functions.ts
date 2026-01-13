function greet(name: string): string {
  return `Hola ${name}`;
}

const greet2 = (name: string): string => `Hola ${name}`;

const message = greet("Goku");
const message2 = greet2("Veggeta");

console.log(message);
console.log(message2);

interface User {
  uid: string;
  userName: string;
}

function getUser(): User {
  return {
    uid: "ABC-123",
    userName: "El_Papi23",
  };
}

const getUser2 = (): User => ({
  uid: "ABC-321",
  userName: "Manolito_Ferragamo",
});

const user = getUser();
const user2 = getUser2();
console.log(user);
console.log(user2);

const myNumbers: number[] = [1, 2, 3, 4, 5];

// myNumbers.forEach(function (value) {
//   console.log({ value });
// });

// myNumbers.forEach((value) => console.log({ value }));

myNumbers.forEach(console.log);
