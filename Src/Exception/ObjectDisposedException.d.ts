import SystemException from "./SystemException.js";

/**
 * 对已释放的对象执行操作时所引发的异常。
 * @class
 */
export default class ObjectDisposedException extends SystemException {
    /**
     * 初始化 System.ObjectDisposedException 类的新实例。
     * @constructor
     */
    constructor();

    /**
     * 使用指定错误信息初始化 System.ObjectDisposedException 类的新实例。
     * @constructor
     * @param objectName 包含已释放对象的名称的字符串。
     */
    constructor(objectName: String);

    /**
     * 使用指定的对象名称和消息初始化 System.ObjectDisposedException 类的新实例。
     * @constructor
     * @param objectName 已释放的对象名。
     * @param message 解释异常原因的错误消息。
     */
    constructor(objectName: String, message: String);
}
