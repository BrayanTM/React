const characterNames: string[] = ["Goku", "Vegeta", "Trunks"];

const [, , trunks] = characterNames;
console.log({ trunks });

const returnsArrayFn = () => {
  return ["ABC", 123] as const;
};

const [letters, numbers] = returnsArrayFn();

console.log(numbers + 100);
console.log(letters + "DEF");

// Tarea:

const useState = (startValue: string) => {
  return [startValue, (text: string) => console.log(text)] as const;
};

const [name, setName] = useState("Goku");
console.log(name);
setName("Vegeta");
