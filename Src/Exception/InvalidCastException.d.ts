import ArgumentException from "./ArgumentException.js";

/**
 * 因无效类型转换或显式转换引发的异常。
 * @class
 */
export default class InvalidCastException extends ArgumentException {
    /**
     * 初始化 System.InvalidCastException 类的新实例。
     * @constructor
     */
    constructor();

    /**
     * 使用指定错误信息初始化 System.InvalidCastException 类的新实例。
     * @constructor
     * @param message 描述错误的消息。
     */
    constructor(message: String);
}