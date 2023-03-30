import ArgumentException from "./ArgumentException.js";

/**
 * 在调用方法时传递了不正确的参数类型时引发的异常。
 * @class
 */
export default class ArgumentTypeException extends ArgumentException {
    /**
     * 初始化 System.ArgumentTypeException 类的新实例。
     * @constructor
     */
    constructor();

    /**
     * 使用参数名称初始化 System.ArgumentTypeException 类的新实例。
     * @constructor
     * @param paramName 参数名称。
     */
    constructor(paramName: String);

    /**
     * 使用参数名称和参数类型初始化 System.ArgumentTypeException 类的新实例。
     * @constructor
     * @param paramName 参数名称。
     * @param type 参数类型。
     */
    constructor(paramName: String, type: String);
}