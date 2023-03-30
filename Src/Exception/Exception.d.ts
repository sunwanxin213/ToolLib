/**
 * 表示在应用程序执行期间发生的错误。
 * @class
 */
export default class Exception extends Error {
    /**
     * 获取调用堆栈上直接帧的字符串表示形式。
     * @readonly
     * @returns {String} 用于描述调用堆栈的直接帧的字符串。
     */
    readonly StackTrace: String;

    /**
     * 获取描述当前异常的消息。
     * @readonly
     * @returns {String} 解释异常原因的错误消息或空字符串 ("")。
     */
    readonly Message: String;

    /**
     * 获取或设置指向此异常所关联帮助文件的链接。
     * @returns {String} 统一资源名称 (URN) 或统一资源定位器 (URL)。
     */
    HelpLink: String;

    /**
     * 使用指定的错误消息初始化 System.Exception 类的新实例。
     * @constructor
     * @param message 描述错误的消息。
     */
    constructor(message: String);

    /**
     * 获取资源文件中指定名称的字符串。
     * @static
     * @param message 描述错误的消息。
     */
    static GetResourceString(message: String): String;

    /**
     * 获取资源文件中指定名称的字符串。
     * @static
     * @param message 描述错误的消息。
     * @param params 描述错误的参数。
     */
    static GetResourceString(message: String, ...params: Object[]): String;

    /**
     * 获取资源文件中指定名称的字符串。
     * @param message 描述错误的消息。
     */
    GetResourceString(message: String): String;

    /**
     * 获取资源文件中指定名称的字符串。
     * @param message 描述错误的消息。
     * @param params 描述错误的参数。
     */
    GetResourceString(message: String, ...params: Object[]): String;
}
