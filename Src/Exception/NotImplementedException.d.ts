import SystemException from "./SystemException.js";

/**
 * 在无法实现请求的方法或操作时引发的异常。
 * @class
 */
export default class NotImplementedException extends SystemException {
    /**
     * 初始化 System.NotImplementedException 类的新实例。
     * @constructor
     */
    constructor();

    /**
     * 使用指定错误信息初始化 System.NotImplementedException 类的新实例。
     * @constructor
     * @param message 描述错误的消息。
     */
    constructor(message: String);
}
