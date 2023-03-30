import Base from "../Core/Base.js";
import Point from "./Point.js";

/**
 * 定义一个矩形。
 * @class
 */
export default class Rectangle extends Base {
    /**
     * 返回所有值均设置为零的 Rectangle。
     * @static
     * @readonly
     */
    static readonly Empty: Rectangle;

    /**
     * 指定矩形的 x 方向坐标。
     */
    X: Number;

    /**
     * 指定矩形的 y 方向坐标。
     */
    Y: Number;

    /**
     * 指定矩形的宽度。
     */
    Width: Number;

    /**
     * 指定矩形的高度。
     */
    Height: Number;

    /**
     * 获取一个指示 Rectangle 是否为空的值。
     * @readonly
     */
    readonly IsEmpty: Boolean;

    /**
     * 返回矩形底部的 y 方向坐标。
     * @readonly
     */
    readonly Bottom: Number;

    /**
     * 获取指定矩形中心的 Point。
     * @readonly
     */
    readonly Center: Point;

    /**
     * 返回矩形左边的 x 方向坐标。
     */
    Left: Number;

    /**
     * 返回矩形右侧的 x 方向坐标。
     */
    Right: Number;

    /**
     * 返回矩形顶部的 y 方向坐标。
     */
    Top: Number;

    constructor();

    /**
     * 初始化新的 Rectangle 实例。
     * @constructor
     * @param {Number} x 矩形的 x 方向坐标。
     * @param {Number} y 矩形的 y 方向坐标。
     * @param {Number} width 矩形宽度。
     * @param {Number} height 矩形高度。
     * @returns {Rectangle} Rectangle 实例。
     */
    constructor(x: Number, y: Number, width: Number, height: Number);

    /**
     * 创建一个 Rectangle，用于定义一个矩形与另一个矩形重叠的区域。
     * @static
     * @param {Rectangle} value1 要比较的第一个 Rectangle。
     * @param {Rectangle} value2 要比较的第二个 Rectangle。
     * @returns {Rectangle} 一个矩形与另一个矩形重叠的区域。
     */
    static Intersect(value1: Rectangle, value2: Rectangle): Rectangle;

    /**
     * 创建一个完全包含两个其他矩形的新 Rectangle。
     * @static
     * @param {Rectangle} value1 要包含的第一个 Rectangle。
     * @param {Rectangle} value2 要包含的第二个 Rectangle。
     * @returns {Rectangle} 完全包含两个其他矩形的新 Rectangle。
     */
    static Union(value1: Rectangle, value2: Rectangle): Rectangle;

    /**
     * 确定该 Rectangle 中是否包含以 x 和 y 坐标呈现的指定点。
     * @param {Number} x 指定点的 x 方向坐标。
     * @param {Number} y 指定点的 y 方向坐标。
     * @returns {Boolean} 该 Rectangle 中是否包含以 x 和 y 坐标呈现的指定点。
     */
    Contains(x: Number, y: Number): Boolean;

    /**
     * 确定该 Rectangle 中是否包含指定的 Point。
     * @param {Point} value 要求值的 Point。
     * @returns {Boolean} 该 Rectangle 中是否包含指定的 Point。
     */
    Contains(value: Point): Boolean;

    /**
     * 确定该 Rectangle 条目中是否包含指定的 Rectangle。
     * @param {Rectangle} value 要求值的 Rectangle。
     * @returns {Boolean} 该 Rectangle 条目中是否包含指定的 Rectangle。
     */
    Contains(value: Rectangle): Boolean;

    /**
     * 确定指定的 Object 是否等于 Rectangle。
     * @param {Rectangle} other 用于与当前 Rectangle 比较的 Object。
     * @returns {Boolean} 指定的 Object 是否等于 Rectangle。
     */
    Equals(other: Rectangle): Boolean;

    /**
     * 返回指示当前实例是否等于指定对象的值。
     * @param {Object} obj 用于进行比较的对象。
     * @returns {Boolean} 指示当前实例是否等于指定对象的值。
     */
    Equals(obj: Object): Boolean;

    /**
     * 按指定的垂直和水平值向外推动 Rectangle 的边缘。
     * @param {Number} horizontalAmount 向外推动边缘的值。
     * @param {Number} verticalAmount 向外推动顶部和底部的值。
     * @returns {void}
     */
    Inflate(horizontalAmount: Number, verticalAmount: Number): void;

    /**
     * 确定指定的 Rectangle 是否与该 Rectangle 相交。
     * @param {Rectangle} value 要求值的 Rectangle。
     * @returns {Boolean} 指定的 Rectangle 是否与该 Rectangle 相交。
     */
    Intersects(value: Rectangle): Boolean;

    /**
     * 更改 Rectangle 的位置。
     * @param {Number} offsetX 更改 x 位置。
     * @param {Number} offsetY 更改 y 位置。
     * @returns {void}
     */
    Offset(offsetX: Number, offsetY: Number): void;

    /**
     * 更改 Rectangle 的位置。
     * @param {Point} amount 要调整 Rectangle 位置的值。
     * @returns {void}
     */
    Offset(amount: Point): void;

    /**
     * 检索当前对象的字符串呈现。
     * @returns {String} 当前对象的字符串呈现。
     */
    ToString(): String;
}
