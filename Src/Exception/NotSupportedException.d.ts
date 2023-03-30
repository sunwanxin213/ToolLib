import SystemException from "./SystemException.js";

/**
 * 当调用的方法不受支持，或试图读取、查找或写入不支持调用功能的流时引发的异常。
 * @class
 */
export default class NotSupportedException extends SystemException {
    /**
     * 初始化 System.NotSupportedException 类的新实例。
     * @constructor
     */
    constructor();

    /**
     * 使用指定错误信息初始化 System.NotSupportedException 类的新实例。
     * @constructor
     * @param message 描述错误的消息。
     */
    constructor(message: String);
}
