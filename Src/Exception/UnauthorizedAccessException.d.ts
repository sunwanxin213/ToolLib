import SystemException from "./SystemException.js";

/**
 * 当操作系统因 I/O 错误或指定类型的安全错误而拒绝访问时所引发的异常。
 * @class
 */
export default class UnauthorizedAccessException extends SystemException {
    /**
     * 初始化 System.UnauthorizedAccessException 类的新实例。
     * @constructor
     */
    constructor();

    /**
     * 使用指定错误信息初始化 System.UnauthorizedAccessException 类的新实例。
     * @constructor
     * @param message 描述错误的消息。
     */
    constructor(message: String);
}
