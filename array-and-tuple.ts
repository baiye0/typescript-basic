let arrOfNumbers: number[] = [1, 2, 3];
arrOfNumbers.push(4);
// arrOfNumbers.push("five");
let arrOfNumbers2: Array<number> = [1, 2, 3];

function test() {
  //arguments 比较特殊，是类数组
  console.log(arguments);
  //   arguments.length
  let htmlCollection: HTMLCollection;
}

// 元组,限定数据类型数量的数组
let user: [string, number] = ["John", 20];
user.push("Smith"); //注意，push方法是可以的，但是只有上述2个类型
// user.push(true); //报错
