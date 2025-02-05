interface IPerson {
  readonly id: number;
  name: string;
  age?: number;
  greet: () => string;
}

let baiye: IPerson = {
  id: 1,
  name: "baiye",
  age: 20,
  greet: () => "hello",
  //   id:1, //报错
};

// baiye.id = 2; //报错
