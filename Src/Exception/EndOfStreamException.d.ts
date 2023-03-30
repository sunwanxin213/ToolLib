import SystemException from "./SystemException.js";

/**
 * 读操作试图超出流的末尾时引发的异常。
 * @class
 */
export default class EndOfStreamException extends SystemException {
    /**
     * 初始化 System.IO.EndOfStreamException 类的新实例。
     * @constructor
     */
    constructor();

    /**
     * 使用指定的错误消息初始化 System.IO.EndOfStreamException 类的新实例。
     * @constructor
     * @param message 描述错误的字符串。message 的内容被设计为人可理解的形式。此构造函数的调用方需要确保此字符串已针对当前系统区域性进行了本地化。
     */
    constructor(message: String);
}
