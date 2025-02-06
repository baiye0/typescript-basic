// type aliase

let sum: (x: number, y: number) => number;
type PlusType = (x: number, y: number) => number;

let sum2: PlusType;

type StrOrNumber = string | number;
let result1: StrOrNumber = "123";

type Directions = "north" | "east" | "south" | "west";
let where: Directions = "north";

//交叉类型
interface IName {
  name: string;
}
type IPerson = IName & { age: number };

// let person: IPerson = { name: "John" }; //报错，缺少age属性

//什么时候使用type,什么时候使用interface
// 1. 如果你要使用联合类型或者交叉类型，type适合
// 2. 如果你要使用implements 或者 extends，interface适合
