import ArgumentException from "./ArgumentException.js";
import Enum from "../Core/Enum.js";

/**
 * 使用无效参数（为枚举数）时引发的异常。
 * @class
 */
export default class InvalidEnumArgumentException extends ArgumentException {
    /**
     * 在不带消息的情况下初始化 System.ComponentModel.InvalidEnumArgumentException 类的新实例。
     * @constructor
     */
    constructor();

    /**
     * 用指定的消息初始化 System.ComponentModel.InvalidEnumArgumentException 类的新实例。
     * @constructor
     * @param message 与此异常一起显示的消息。
     */
    constructor(message: String);

    /**
     * 初始化 System.ComponentModel.InvalidEnumArgumentException 类的新实例，带有从参数、无效值和枚举类生成的消息。
     * @constructor
     * @param argumentName 导致异常的参数的名称。
     * @param invalidValue 失败的参数的值。
     * @param enumClass 表示具有有效值的枚举类。
     */
    constructor(argumentName: String, invalidValue: Number, enumClass: Enum);
}
