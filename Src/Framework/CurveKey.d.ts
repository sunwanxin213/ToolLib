import MethodOverload from "../Core/MethodOverload.js";
import Base from "../Core/Base.js";
import CurveContinuity from "./CurveContinuity.js";

/**
 * 在多点曲线中呈现一个点。
 * @class
 */
export default class CurveKey extends Base {
    /**
     * CurveKey 在曲线中的位置。
     */
    get Position(): Number;

    /**
     * 描述曲线上的该点和下一点之间的线段是离散还是连续。
     */
    Continuity: CurveContinuity;

    /**
     * 介绍曲线中的先前点接近该点时的切线。
     */
    TangentIn: Number;

    /**
     * 介绍曲线中离开该点向下一点靠近时的切线。
     */
    TangentOut: Number;

    /**
     * 描述该点的值。
     */
    Value: Number;

    /**
     * 初始化新的 CurveKey 实例。
     * @constructor
     * @param {Number} position 曲线上的位置。
     * @param {Number} value 控制点的值。
     * @returns {CurveKey} CurveKey 实例。
     */
    constructor(position: Number, value: Number);

    /**
     * 初始化新的 CurveKey 实例。
     * @constructor
     * @param {Number} position 曲线上的位置。
     * @param {Number} value 控制点的值。
     * @param {Number} tangentIn 从曲线的先前点起始的切线切入点。
     * @param {Number} tangentOut 指向曲线的下一个点的切线切出点。
     * @returns {CurveKey} CurveKey 实例。
     */
    constructor(position: Number, value: Number, tangentIn: Number, tangentOut: Number);

    /**
     * 初始化新的 CurveKey 实例。
     * @constructor
     * @param {Number} position 曲线上的位置。
     * @param {Number} value 控制点的值。
     * @param {Number} tangentIn 从曲线的先前点起始的切线切入点。
     * @param {Number} tangentOut 指向曲线的下一个点的切线切出点。
     * @param {CurveContinuity} continuity 表示曲线为离散或连续曲线的枚举。
     * @returns {CurveKey} CurveKey 实例。
     */
    constructor(position: Number, value: Number, tangentIn: Number, tangentOut: Number, continuity: CurveContinuity);

    /**
     * 创建 CurveKey 的副本。
     * @returns {CurveKey} CurveKey 的副本。
     */
    Clone(): CurveKey;

    /**
     * 将该实例与其他 CurveKey 比较，并返回其相对值指示。
     * @param {CurveKey} other 要比较的 CurveKey。
     * @returns {Number} 比较结果。
     */
    CompareTo(other: CurveKey): Number;

    /**
     * 确定指定的 Object 是否等于 CurveKey。
     * @param {CurveKey} other 用于与当前 CurveKey 比较的 Object。
     * @returns {Boolean} 是否相等。
     */
    Equals(other: CurveKey): Boolean;

    /**
     * 返回指示当前实例是否等于指定对象的值。
     * @param {Object} obj 用于进行比较的对象。
     * @returns {Boolean} 是否相等。
     */
    Equals(obj: Object): Boolean;
}
