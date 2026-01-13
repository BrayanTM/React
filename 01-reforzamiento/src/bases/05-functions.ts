function greet(name: string): string {
  return `Hola ${name}`;
}

const greet2 = (name: string): string => {
  return `Hola ${name}`;
};

const message = greet("Goku");
const message2 = greet2("Veggeta");

console.log(message);
console.log(message2);

function getUser() {
  return {
    uid: "ABC-123",
    userName: "El_Papi23",
  };
}

const getUser2 = () => {
  return {
    uid: "ABC-123",
    userName: "El_Papi23",
  };
};

const user = getUser();
const user2 = getUser2();
console.log(user);
console.log(user2);
