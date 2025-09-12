const characterNames = ["Goku", "Vegeta", "Trunks"];

const [, , p3] = characterNames;

console.log({ p3 });

const returnsArrayFn = () => {
  return ["ABC", 124] as const;
};

const [letters, numbers] = returnsArrayFn();

const useState = (name: string) => {
  return [name, (newValue: string) => console.log(newValue)] as const;
};


const [name,setName]=useState('Goku');
console.log(name);
setName('Vegeta');