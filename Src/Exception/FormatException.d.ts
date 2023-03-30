import SystemException from "./SystemException.js";

/**
 * 当参数格式不符合调用的方法的参数规范时引发的异常。
 * @class
 */
export default class FormatException extends SystemException {
    /**
     * 初始化 System.FormatException 类的新实例。
     * @constructor
     */
    constructor();

    /**
     * 使用指定错误信息初始化 System.FormatException 类的新实例。
     * @constructor
     * @param message 描述错误的消息。
     */
    constructor(message: String);
}
