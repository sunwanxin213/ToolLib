import SystemException from "./SystemException.js";

/**
 * 因算术运算、类型转换或转换操作中的错误而引发的异常。
 * @class
 */
export default class ArithmeticException extends SystemException {
    /**
     * 初始化 System.ArithmeticException 类的新实例。
     * @constructor
     */
    constructor();

    /**
     * 使用指定的错误消息初始化 System.ArithmeticException 类的新实例。
     * @constructor
     * @param message 描述错误的消息。
     */
    constructor(message: String);
}
