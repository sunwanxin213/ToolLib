import SystemException from "./SystemException.js";

/**
 * 当方法调用对于对象的当前状态无效时引发的异常。
 * @class
 */
export default class InvalidOperationException extends SystemException {
    /**
     * 初始化 System.InvalidOperationException 类的新实例。
     * @constructor
     */
    constructor();

    /**
     * 使用指定错误信息初始化 System.InvalidOperationException 类的新实例。
     * @constructor
     * @param message 描述错误的消息。
     */
    constructor(message: String);
}
