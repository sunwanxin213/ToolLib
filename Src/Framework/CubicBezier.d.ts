import Base from "../Core/Base.js";
import Vector2 from "./Vector2.js";

/**
 * 三次贝塞尔曲线
 * @class
 */
export default class CubicBezier extends Base {
    /**
     * 获取以相同速度开始至结束的三次贝塞尔曲线
     * @returns {CubicBezier} 以相同速度开始至结束的三次贝塞尔曲线
     */
    static get Linear(): CubicBezier;

    /**
     * 获取慢速开始，然后变快，然后慢速结束的三次贝塞尔曲线
     * @returns {CubicBezier} 慢速开始，然后变快，然后慢速结束的三次贝塞尔曲线
     */
    static get Ease(): CubicBezier;

    /**
     * 获取以慢速开始的三次贝塞尔曲线
     * @returns {CubicBezier} 以慢速开始的三次贝塞尔曲线
     */
    static get EaseIn(): CubicBezier;

    /**
     * 获取以慢速结束的三次贝塞尔曲线
     * @returns {CubicBezier} 以慢速结束的三次贝塞尔曲线
     */
    static get EaseOut(): CubicBezier;

    /**
     * 获取以慢速开始和结束的三次贝塞尔曲线
     * @returns {CubicBezier} 以慢速开始和结束的三次贝塞尔曲线
     */
    static get EaseInOut(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInSine(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseOutSine(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInOutSine(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInQuad(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseOutQuad(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInOutQuad(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInCubic(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseOutCubic(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInOutCubic(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInQuart(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseOutQuart(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInOutQuart(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInQuint(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseOutQuint(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInOutQuint(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInExpo(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseOutExpo(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInOutExpo(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInCirc(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseOutCirc(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInOutCirc(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInBack(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseOutBack(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInOutBack(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInElastic(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseOutElastic(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInOutElastic(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInBounce(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseOutBounce(): CubicBezier;

    /**
     * 获取三次贝塞尔曲线
     * @returns {CubicBezier} 三次贝塞尔曲线
     */
    static get EaseInOutBounce(): CubicBezier;

    /**
     * 三次贝塞尔曲线第二个控制点的 x 轴坐标
     * @type {Number}
     */
    X1: Number;

    /**
     * 三次贝塞尔曲线第二个控制点的 y 轴坐标
     * @type {Number}
     */
    Y1: Number;

    /**
     * 三次贝塞尔曲线第三个控制点的 x 轴坐标
     * @type {Number}
     */
    X2: Number;

    /**
     * 三次贝塞尔曲线第三个控制点的 y 轴坐标
     * @type {Number}
     */
    Y2: Number;

    /**
     * 获取三次贝塞尔曲线第一个控制点向量坐标
     * @returns {Vector2} 三次贝塞尔曲线第一个控制点向量坐标
     */
    get V1(): Vector2;

    /**
     * 获取三次贝塞尔曲线第二个控制点向量坐标
     * @returns {Vector2} 三次贝塞尔曲线第二个控制点向量坐标
     */
    get V2(): Vector2;

    /**
     * 获取三次贝塞尔曲线第三个控制点向量坐标
     * @returns {Vector2} 三次贝塞尔曲线第三个控制点向量坐标
     */
    get V3(): Vector2;

    /**
     * 获取三次贝塞尔曲线第四个控制点向量坐标
     * @returns {Vector2} 三次贝塞尔曲线第四个控制点向量坐标
     */
    get V4(): Vector2;

    /**
     * 构造并返回一个三次贝塞尔曲线
     */
    constructor();

    /**
     * 构造并返回一个三次贝塞尔曲线
     * @param {Vector2} v1 第二个控制点向量坐标
     * @param {Vector2} v2 第三个控制点向量坐标
     */
    constructor(v1: Vector2, v2: Vector2);

    /**
     * 构造并返回一个三次贝塞尔曲线
     * @param {Number} x1 第二个控制点的 x 轴坐标
     * @param {Number} y1 第二个控制点的 y 轴坐标
     * @param {Number} x2 第三个控制点的 x 轴坐标
     * @param {Number} y2 第三个控制点的 y 轴坐标
     */
    constructor(x1: Number, y1: Number, x2: Number, y2: Number);

    /**
     * 求解贝塞尔曲线上的 y 轴坐标
     * @param {Number} x x轴坐标
     * @returns {Number} y轴坐标
     */
    Solve(x: Number): Number;
}