import Base from "../Core/Base.js";

/**
 * 定义 2D 空间中的点。
 * @class
 */
export default class Point extends Base {
    /**
     * 返回点 (0,0)。
     * @static
     * @readonly
     */
    static readonly Zero: Point;

    /**
     * 指定 Point 的 x 方向坐标。
     */
    X: Number;

    /**
     * 指定 Point 的 y 方向坐标。
     */
    Y: Number;

    constructor();

    /**
     * 初始化新的 Point 实例。
     * @constructor
     * @param {Number} x Point 的 x 方向坐标。
     * @param {Number} y Point 的 y 方向坐标。
     * @returns {Point} Point 实例。
     */
    constructor(x: Number, y: Number);

    /**
     * 确定两个 Point 实例是否相等。
     * @param {Point} other 用于与此实例比较的 Point。
     * @returns {Boolean} 如果指定的 Point 等于当前 Point，则为 true，否则为 false。
     */
    Equals(other: Point): Boolean;

    /**
     * 确定两个 Point 实例是否相等。
     * @param {Object} obj 用于与此实例比较的对象。
     * @returns {Boolean} 如果对象被视为相等，则为 true，否则为 false。
     */
    Equals(obj: Object): Boolean;

    /**
    * 返回呈现当前 Point 的 String。
    * @returns {String} 呈现当前 Point 的 String。
    */
    ToString(): String;
}
