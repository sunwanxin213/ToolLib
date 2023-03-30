import ArgumentException from "./ArgumentException.js";

/**
 * 当将空引用（在 Visual Basic 中为 Nothing）传递给不接受它作为有效参数的方法时引发的异常。
 * @class
 */
export default class ArgumentNullException extends ArgumentException {
    /**
     * 初始化 System.ArgumentNullException 类的一个新实例。
     * @constructor
     */
    constructor();

    /**
     * 使用导致此异常的参数的名称初始化 System.ArgumentNullException 类的新实例。
     * @constructor
     * @param message 导致异常的参数的名称。
     */
    constructor(message: String);

    /**
     * 使用指定的错误消息和导致此异常的参数的名称来初始化 System.ArgumentNullException 类的实例。
     * @constructor
     * @param paramName 导致异常的参数的名称。
     * @param message 描述错误的消息。
     */
    constructor(paramName: String, message: String);
}
