import SystemException from "./SystemException.js";

export default class ArgumentException extends SystemException {
    /**
     * 初始化 System.ArgumentException 类的新实例。
     * @constructor
     */
    constructor();

    /**
     * 使用指定错误消息初始化 System.ArgumentException 类的新实例。
     * @constructor
     * @param message 解释异常原因的错误消息。
     */
    constructor(message: String);

    /**
     * 使用指定错误消息和导致此异常的参数的名称来初始化 System.ArgumentException 类的新实例。
     * @param message 解释异常原因的错误消息。
     * @param paramName 导致当前异常的参数的名称。
     */
    constructor(message: String, paramName: String);
}
