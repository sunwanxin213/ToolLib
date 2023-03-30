import ArgumentException from "./ArgumentException.js";

/**
 * 当参数值超出调用的方法所定义的允许取值范围时引发的异常。
 * @class
 */
export default class ArgumentOutOfRangeException extends ArgumentException {
    /**
     * 初始化 System.ArgumentOutOfRangeException 类的一个新实例。
     * @constructor
     */
    constructor();

    /**
     * 使用导致此异常的参数的名称初始化 System.ArgumentOutOfRangeException 类的新实例。
     * @constructor
     * @param message 导致异常的参数的名称。
     */
    constructor(message: String);

    /**
     * 使用指定的错误消息和导致此异常的参数的名称来初始化 System.ArgumentOutOfRangeException 类的实例。
     * @constructor
     * @param paramName 导致异常的参数的名称。
     * @param message 描述错误的消息。
     */
    constructor(paramName: String, message: String);
}
