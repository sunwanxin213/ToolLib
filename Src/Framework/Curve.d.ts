import Base from "../Core/Base.js";
import CurveKeyCollection from "./CurveKeyCollection.js";
import CurveLoopType from "./CurveLoopType.js";
import CurveTangent from "./CurveTangent.js";

/**
 * 存储任意 2D CurveKey 点集，并提供相应的方法对其定义的曲线进行功能评估。
 * @class
 */
export default class Curve extends Base {
    /**
     * 指定如何处理大于曲线中最后一个控制点的权重值。
     */
    PostLoop: CurveLoopType;

    /**
     * 指定如何处理小于曲线中第一个控制点的权重值。
     */
    PreLoop: CurveLoopType;

    /**
     * 获取一个指示曲线是否为常量的值。
     */
    get IsConstant(): Boolean;

    /**
     * 构成曲线的点。
     */
    get Keys(): CurveKeyCollection;

    /**
     * 初始化新的 Curve 实例。
     * @constructor
     * @returns {Curve} Curve 实例。
     */
    constructor();

    /**
     * 创建 Curve 的副本。
     * @returns {Curve} Curve 的副本。
     */
    Clone(): Curve;

    /**
     * 为通过索引指定的 CurveKey 计算 TangentIn 和 TangentOut。
     * @param {Number} keyIndex 要计算切线的 CurveKey 的索引（在 Curve 的 Keys 集合中）。
     * @param {CurveLoopType} tangentType 要计算的切线的类型（CurveTangent 枚举中指定的一个类型）。
     * @returns {void}
     */
    ComputeTangent(keyIndex: Number, tangentType: CurveLoopType): void;

    /**
     * 为给定的 CurveKey 计算指定类型的 TangentIn 和指定类型的 TangentOut。
     * @param {Number} keyIndex 要计算切线的 CurveKey 的索引（在 Curve 的 Keys 集合中）。
     * @param {CurveLoopType} tangentInType 要计算的 TangentIn 的类型（CurveTangent 枚举中指定的一个类型）。
     * @param {CurveLoopType} tangentOutType 要计算的 TangentOut 的类型（CurveTangent 枚举中指定的一个类型）。
     * @returns {void}
     */
    ComputeTangent(keyIndex: Number, tangentInType: CurveLoopType, tangentOutType: CurveLoopType): void;

    /**
     * 为 TangentIn 和 TangentOut 使用指定的切线类型，计算该 Curve 中所有 CurveKey 的切线。
     * @param {CurveLoopType} tangentType 要计算的 TangentOut 和 TangentIn 的类型（CurveTangent 枚举中指定的一个类型）。
     * @returns {void}
     */
    ComputeTangents(tangentType: CurveLoopType): void;

    /**
     * 为 TangentOut 和 TangentIn 使用不同的切线类型，计算该 Curve 中所有 CurveKey 的切线。
     * @param {CurveLoopType} tangentInType 要计算的 TangentIn 的类型（CurveTangent 枚举中指定的一个类型）。
     * @param {CurveLoopType} tangentOutType 要计算的 TangentOut 的类型（CurveTangent 枚举中指定的一个类型）。
     * @returns {void}
     */
    ComputeTangents(tangentInType: CurveLoopType, tangentOutType: CurveLoopType): void;

    /**
     * 查找 Curve 上某个位置的值。
     * @param {Number} position Curve 上的位置。
     * @returns {Number} 查找到的值。
     */
    Evaluate(position: Number): Number;
}
