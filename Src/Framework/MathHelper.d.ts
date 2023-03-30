/**
 * 包含常用的预计算值。
 * @class
 * @static
 */
export default class MathHelper {
    /**
     * 呈现数学常量 e。
     * @static
     * @readonly
     */
    static readonly E: Number;

    /**
     * 呈现以 10 为底 e 的对数。
     * @static
     * @readonly
     */
    static readonly Log10E: Number;

    /**
     * 呈现以 2 为底 e 的对数。
     * @static
     * @readonly
     */
    static readonly Log2E: Number;

    /**
     * 呈现 pi 的值。
     * @static
     * @readonly
     */
    static readonly Pi: Number;

    /**
     * 呈现 pi 除以二的值。
     * @static
     * @readonly
     */
    static readonly PiOver2: Number;

    /**
     * 呈现 pi 除以四的值。
     * @static
     * @readonly
     */
    static readonly PiOver4: Number;

    /**
     * 呈现 2π 的值。
     * @static
     * @readonly
     */
    static readonly TwoPi: Number;

    /**
     * 返回给定三角形定义的某个点在一个轴上的 Cartesian 坐标，以及两个法线化质心（重心）坐标。
     * @static
     * @param {Number} value1 定义三角形的顶点 1 在一个轴上的坐标。
     * @param {Number} value2 定义三角形的顶点 2 在一个轴上的坐标。
     * @param {Number} value3 定义三角形的顶点 3 在一个轴上的坐标。
     * @param {Number} amount1 法线化质心（重心）坐标 b2，等于顶点 2 的权重因子，该顶点的坐标已在 value2 中指定。
     * @param {Number} amount2 法线化质心（重心）坐标 b3，等于顶点 3 的权重因子，该顶点的坐标已在 value3 中指定。
     * @returns {Number} 给定三角形定义的某个点在一个轴上的 Cartesian 坐标，以及两个法线化质心（重心）坐标。
     */
    static Barycentric(value1: Number, value2: Number, value3: Number, amount1: Number, amount2: Number): Number;

    /**
     * 用指定的位置执行 Catmull-Rom 插值。
     * @static
     * @param {Number} value1 插值中的第一个位置。
     * @param {Number} value2 插值中的第二个位置。
     * @param {Number} value3 插值中的第三个位置。
     * @param {Number} value4 插值中的第四个位置。
     * @param {Number} amount 权重因子。
     * @returns {Number} 插值结果。
     */
    static CatmullRom(value1: Number, value2: Number, value3: Number, value4: Number, amount: Number): Number;

    /**
     * 将值限制在指定范围内。
     * @static
     * @param {Number} value 要限制的值。
     * @param {Number} min 最小值。如果 value 小于 min，将返回 min。
     * @param {Number} max 最大值。如果 value 大于 max，将返回 max。
     * @returns {Number} 限制后的值。
     */
    static Clamp(value: Number, min: Number, max: Number): Number;

    /**
     * 计算两个值之差的绝对值。
     * @static
     * @param {Number} value1 源值。
     * @param {Number} value2 源值。
     * @returns {Number} 两个值之差的绝对值。
     */
    static Distance(value1: Number, value2: Number): Number;

    /**
     * 执行 Hermite 样条插值。
     * @static
     * @param {Number} value1 源位置。
     * @param {Number} tangent1 源切线。
     * @param {Number} value2 源位置。
     * @param {Number} tangent2 源切线。
     * @param {Number} amount 权重因子。
     * @returns {Number} 插值结果。
     */
    static Hermite(value1: Number, tangent1: Number, value2: Number, tangent2: Number, amount: Number): Number;

    /**
     * 在两个值之间执行线性插值。
     * @static
     * @param {Number} value1 源值。
     * @param {Number} value2 源值。
     * @param {Number} amount 指示 value2 权重的 0 到 1 之间的值。
     * @returns {Number} 插值结果。
     */
    static Lerp(value1: Number, value2: Number, amount: Number): Number;

    /**
     * 返回两个值中的较大值。
     * @static
     * @param {Number} value1 源值。
     * @param {Number} value2 源值。
     * @returns {Number} 两个值中的较大值。
     */
    static Max(value1: Number, value2: Number): Number;

    /**
     * 返回两个值中的较小值。
     * @static
     * @param {Number} value1 源值。
     * @param {Number} value2 源值。
     * @returns {Number} 两个值中的较小值。
     */
    static Min(value1: Number, value2: Number): Number;

    /**
     * 使用三次方程计算两个值之间的插值。
     * @static
     * @param {Number} value1 源值。
     * @param {Number} value2 源值。
     * @param {Number} amount 权重值。
     * @returns {Number} 插值结果。
     */
    static SmoothStep(value1: Number, value2: Number, amount: Number): Number;

    /**
     * 将弧度转换为角度。
     * @static
     * @param {Number} radians 以弧度表示的角。
     * @returns {Number} 角度。
     */
    static ToDegrees(radians: Number): Number;

    /**
     * 将角度转换为弧度。
     * @static
     * @param {Number} degrees 以角度表示的角。
     * @returns {Number} 弧度。
     */
    static ToRadians(degrees: Number): Number;

    /**
     * 将一个给定角度减小到介于 π 和 -π 的值。
     * @static
     * @param {Number} angle 要减少的角度，以弧度计。
     * @returns {Number} 角度减小到介于 π 和 -π 的值。
     */
    static WrapAngle(angle: Number): Number;

    /**
     * 判断一个数值是否为 2 的次方。
     * @static
     * @param {Number} value 要判断的数值。
     * @returns {Boolean} 是否为 2 的次方。
     */
    static IsPowerOfTwo(value: Number): Boolean;
}
