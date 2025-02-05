const add = (x: number, y: number, z?: number): number => {
  if (typeof z === "number") {
    return x + y + z;
  }
  return x + y;
};

// let add2:string = add(1, 2, 3);
interface ISum {
  (x: number, y: number, z?: number): number; //这里的返回用：
}
let add2: (x: number, y: number, z?: number) => number = add; //=>表示返回值类型 (x: number, y: number, z?: number) => number表示函数类型

let add3: ISum = add;
