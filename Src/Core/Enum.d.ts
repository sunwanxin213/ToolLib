import Base from "./Base.js";

export default class Enum<T> extends Base {

    /**
     * 构建一个新的枚举。
     * @constructor
     */
    constructor();

    /**
     * 使用现有枚举构建一个新的枚举。
     * @constructor
     * @param {Enum<T>} value 要构建新枚举的枚举。
     */
    constructor(value: Enum<T>);

    /**
     * 使用任意数据构建一个新的枚举。
     * @constructor
     * @param {any} value 要构建枚举的数据。
     */
    constructor(value: any);

    /**
     * 使用现有枚举和描述字符串构建一个新的枚举。
     * @constructor
     * @param {Enum<T>} value 要构建新枚举的枚举。
     * @param {String} description 描述字符串。
     */
    constructor(value: Enum<T>, description: String);

    /**
     * 使用任意数据和描述字符串构建一个新的枚举。
     * @constructor
     * @param {any} value 要构建枚举的数据。
     * @param {String} description 描述字符串。
     */
    constructor(value: any, description: String);

    /**
     * 获取所有枚举。
     * @static
     * @returns {Array<Enum<T>>} 存有枚举的数组。
     */
    static GetAllEnum(): Array<Enum<T>>;

    /**
     * 根据数字获取枚举。
     * @static
     * @param {Object} value 查询数字。
     * @returns {Enum<T> | null} 获取到的枚举或 null。
     */
    static GetEnumByValue(value: Number): Enum<T> | null;

    /**
     * 根据字符串获取枚举。
     * @static
     * @param {Object} value 查询字符串。
     * @returns {Enum<T> | null} 获取到的枚举或 null。
     */
    static GetEnumByValue(value: String): Enum<T> | null;

    /**
     * 根据布尔值获取枚举。
     * @static
     * @param {Object} value 查询布尔值。
     * @returns {Enum<T> | null} 获取到的枚举或 null。
     */
    static GetEnumByValue(value: Boolean): Enum<T> | null;

    /**
     * 根据对象获取枚举。
     * @static
     * @param {Object} value 查询对象。
     * @returns {Enum<T> | null} 获取到的枚举或 null。
     */
    static GetEnumByValue(value: Object): Enum<T> | null;

    /**
     * 根据描述字符串获取枚举。
     * @static
     * @param {String} value 描述字符串。
     * @returns {Enum<T> | null} 获取到的枚举或 null。
     */
    static GetEnumByDescription(value: String): Enum<T> | null;

    /**
     * 获取枚举原始值。
     * @returns {any} 枚举原始值。
     */
    valueOf(): any;

    /**
     * 将枚举原始值转换为数字。
     * @returns {Number} 转换为数字的枚举原始值。
     */
    ToNumber(): Number;

    /**
     * 将枚举原始值转换为字符串。
     * @returns {String} 转换为字符串的枚举原始值。
     */
    ToString(): String;

    /**
     * 将枚举原始值转换为布尔值。
     * @returns {Boolean} 转换为布尔值的枚举原始值。
     */
    ToBoolean(): Boolean;

    /**
     * 将枚举原始值转换为对象。
     * @returns {Object} 转换为对象的枚举原始值。
     */
    ToObject(): Object;

    /**
     * 获取枚举描述字符串。
     * @returns {String} 枚举描述字符串。
     */
    GetDescription(): String;
}
