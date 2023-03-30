import ArithmeticException from "./ArithmeticException.js";

/**
 * 在选中的上下文中所进行的算术运算、类型转换或转换操作导致溢出时引发的异常。
 * @class
 */
export default class OverflowException extends ArithmeticException {
    /**
     * 初始化 System.OverflowException 类的新实例。
     * @constructor
     */
    constructor();

    /**
     * 使用指定错误信息初始化 System.OverflowException 类的新实例。
     * @constructor
     * @param message 描述错误的消息。
     */
    constructor(message: String);
}
