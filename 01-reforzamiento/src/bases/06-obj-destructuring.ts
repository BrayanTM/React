const person = {
  name: "Tony",
  age: 45,
  key: "Ironman",
};

// const name = person.name;
// const age = person.age;
// const key = person.key;

const { name: ironmanName, age, key } = person;

console.log({ ironmanName, age, key });

interface Hero {
  name: string;
  age: number;
  key: string;
  rank?: string;
}

const UseContext = ({ key, name, age, rank = "sin rango" }: Hero) => {
  return {
    keyName: key,
    user: {
      name,
      age,
    },
    rank,
  };
};

const {
  rank,
  keyName,
  user,
  //   user: { name },
} = UseContext(person);

const { name } = user;

console.log({ rank, keyName, name });
