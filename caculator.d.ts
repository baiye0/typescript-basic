type IOperator = "plus" | "minus";
// type ICalculator = (operator: IOperator, x: number, y: number) => number;

//描述各种各样的类型
//是函数且有属性
interface ICalculator {
  (operator: IOperator, x: number, y: number): number;
  plus: (numbers: number[]) => number;
  minus: (numbers: number[]) => number;
}

declare const calculator: ICalculator;
export default calculator;

//函数和函数属性
