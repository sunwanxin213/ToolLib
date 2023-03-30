/**
 * 支持类层次结构中的所有类，并为派生类提供低级别服务。
 * 这是所有类的最终基类；它是类型层次结构的根。
 * @class
 */
export default class Base {
    /**
     * 对象是否已被释放
     */
    get IsDisposed(): Boolean;

    /**
     * 确定指定的对象是否等于当前对象。
     * @param {Object} obj - 要与当前对象进行比较的对象。
     * @returns {Boolean} - 如果指定的对象等于当前对象，则为 true，否则为 false。
     */
    Equals(obj: Object): Boolean;

    /**
     * 在一个对象上定义新的属性或修改现有属性，并返回该对象。
     * @static
     * @param {Object} obj 在其上定义或修改属性的对象。
     * @param props 要定义其可枚举属性或修改的属性描述符的对象。
     * @returns {Object} 传递给函数的对象。
     */
    static DefineProperties<T>(obj: T, props: Object): T;

    /**
     * 确定指定的对象实例是否被视为相等。
     * @static
     * @param {Object} objA - 要比较的第一个对象。
     * @param {Object} objB - 要比较的第二个对象。
     * @returns {Boolean} - 如果对象被视为相等，则为 true，否则为 false。 如果 objA 和 objB 均为 null，此方法将返回 true。
     */
    static Equals(objA: Object, objB: Object): Boolean;

    /**
     * 确定指定的 Core.Base 实例是否是相同的实例。
     * @static
     * @param {Object} objA - 要比较的第一个对象。
     * @param {Object} objB - 要比较的第二个对象。
     * @returns {Boolean} - true如果objA是相同的实例作为objB或如果两者均null; 否则为false。
     */
    static ReferenceEquals(objA: Object, objB: Object): Boolean;

    /**
     * 销毁对象
     * @returns {void}
     */
    Dispose(): void;

    /**
     * 返回表示当前对象的字符串。
     * @returns {String} - 表示当前对象的字符串。
     */
    ToString(): String;
}
