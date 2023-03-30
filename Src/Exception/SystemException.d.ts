import Exception from "./Exception.js";

/**
 * 为 System 命名空间中的预定义异常定义基类。
 * @class
 */
export default class SystemException extends Exception {
    /**
     * 初始化 System.SystemException 类的新实例。
     * @constructor
     */
    constructor();

    /**
     * 使用指定错误信息初始化 System.SystemException 类的新实例。   
     * @constructor
     * @param message 描述错误的消息。
     */
    constructor(message: String);
}
