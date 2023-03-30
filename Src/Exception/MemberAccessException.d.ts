import SystemException from "./SystemException.js";

/**
 * 访问类成员的尝试失败时引发的异常。
 * @class
 */
export default class MemberAccessException extends SystemException {
    /**
     * 初始化 System.MemberAccessException 类的新实例。
     * @constructor
     */
    constructor();

    /**
     * 使用指定错误信息初始化 System.MemberAccessException 类的新实例。
     * @constructor
     * @param message 描述错误的消息。
     */
    constructor(message: String);
}
