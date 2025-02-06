enum Direction {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction.Up); // 0

//反向
console.log(Direction[0]); // Up

//常量枚举，如固定的字符串都可以用常量枚举，可提升性能
const enum Direction2 {
  Up,
  Down,
  Left,
  Right,
}
