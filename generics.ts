//泛型的作用

function echo<T>(args: T): T {
  return args;
}

const result = echo(123);
const result2 = echo("123");
// const result3: string = echo(true); //报错

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const result4 = swap(["string", 123]);

//泛型约束
function echoWithArr<T>(arg: T[]): T[] {
  console.log(arg.length); //报错，因为不知道T是什么类型
  return arg;
}

const arrs = echoWithArr([1, 2, 3]);

interface IWithLength {
  length: number;
}

//T必须是IWithLength的子类
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// const str = echoWithLength("str"); //报错
const str1 = echoWithLength({ length: 10 });
const arr2 = echoWithLength([1, 2, 3]);

//泛型类

class Queue<T> {
  private data: T[] = [];
  push(item: T) {
    return this.data.push(item);
  }
  pop() {
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.push(1);
const result5 = queue.pop();
if (result5) {
  result5.toFixed(); // 无数据类型提示
}

interface KeyPair<T, U> {
  key: T;
  value: U;
}

let kp1: KeyPair<number, string> = { key: 1, value: "string" };

let kp2: KeyPair<string, string> = { key: "string", value: "string" };

let arr: number[] = [1, 2, 3, 4, 5];
//泛型式定义
let arr21: Array<number> = [1, 2, 3, 4, 5];
