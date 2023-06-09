import Base from "../Core/Base.js";
import Matrix from "./Matrix.js";
import Quaternion from "./Quaternion.js";

/**
 * 定义具有两个组件的矢量。
 * @class
 */
export default class Vector2 extends Base {
    /**
     * 返回两个组件均设置为一的 Vector2。
     * @static
     * @readonly
     */
    static readonly One: Vector2;

    /**
     * 返回 x 轴的单位矢量。
     * @static
     * @readonly
     */
    static readonly UnitX: Vector2;

    /**
     * 返回 y 轴的单位矢量。
     * @static
     * @readonly
     */
    static readonly UnitY: Vector2;

    /**
     * 返回所有组件均设置为零的 Vector2。
     * @static
     * @readonly
     */
    static readonly Zero: Vector2;

    /**
     * 获取或设置矢量的 x 色差。
     */
    X: Number;

    /**
     * 获取或设置矢量的 y 色差。
     */
    Y: Number;

    constructor();

    /**
     * 新建 Vector2 实例。
     * @constructor
     * @param {Number} value 两个色差的初始化值。
     * @returns {Vector2} Vector2 实例。
     */
    constructor(value: Number);

    /**
     * 初始化新的 Vector2 实例。
     * @constructor
     * @param {Number} x 矢量 x 色差的初始值。
     * @param {Number} y 矢量 y 色差的初始值。
     * @returns {Vector2} Vector2 实例。
     */
    constructor(x: Number, y: Number);

    /**
     * 将两个矢量相加。
     * @static
     * @param {Vector2} value1 源矢量。
     * @param {Vector2} value2 源矢量。
     * @returns {Vector2} 相加后的矢量。
     */
    static Add(value1: Vector2, value2: Vector2): Vector2;

    /**
     * 返回一个相对于 2D 三角形的质心（重心）坐标中某指定点的 2D Cartesian 坐标所在的 Vector2。
     * @static
     * @param {Vector2} value1 包含三角形顶点 1 的 2D Cartesian 坐标的 Vector2。
     * @param {Vector2} value2 包含三角形顶点 2 的 2D Cartesian 坐标的 Vector2。
     * @param {Vector2} value3 包含三角形顶点 3 的 2D Cartesian 坐标的 Vector2。
     * @param {Number} amount1 质心坐标 b2，用于表达趋向顶点 2 的权重因子（在 value2 中指定）。
     * @param {Number} amount2 质心坐标 b3，用于表达趋向顶点 3 的权重因子（在 value3 中指定）。
     * @returns {Vector2} 相对于 2D 三角形的质心（重心）坐标中某指定点的 2D Cartesian 坐标所在的 Vector2。
     */
    static Barycentric(value1: Vector2, value2: Vector2, value3: Vector2, amount1: Number, amount2: Number): Vector2;

    /**
     * 用指定的位置执行 Catmull-Rom 插值。
     * @static
     * @param {Vector2} value1 插值中的第一个位置。
     * @param {Vector2} value2 插值中的第二个位置。
     * @param {Vector2} value3 插值中的第三个位置。
     * @param {Vector2} value4 插值中的第四个位置。
     * @param {Number} amount 权重因子。
     * @returns {Vector2} 插值结果。
     */
    static CatmullRom(value1: Vector2, value2: Vector2, value3: Vector2, value4: Vector2, amount: Number): Vector2;

    /**
     * 将值限制在指定范围内。
     * @static
     * @param {Vector2} value1 要限制的值。
     * @param {Vector2} min 最小值。
     * @param {Vector2} max 最大值。
     * @returns {Vector2} 限制后的值。
     */
    static Clamp(value1: Vector2, min: Vector2, max: Vector2): Vector2;

    /**
     * 计算两个矢量之间的距离。
     * @static
     * @param {Vector2} value1 源矢量。
     * @param {Vector2} value2 源矢量。
     * @returns {Number} 两个矢量之间的距离。
     */
    static Distance(value1: Vector2, value2: Vector2): Number;

    /**
     * 计算两个平方矢量之间的距离。
     * @static
     * @param {Vector2} value1 源矢量。
     * @param {Vector2} value2 源矢量。
     * @returns {Number} 两个平方矢量之间的距离。
     */
    static DistanceSquared(value1: Vector2, value2: Vector2): Number;

    /**
     * 用一个矢量除以一个标量值。
     * @static
     * @param {Vector2} value1 源矢量。
     * @param {Number} divider 除数。
     * @returns {Vector2} 结果矢量。
     */
    static Divide(value1: Vector2, divider: Number): Vector2;

    /**
     * 用一个矢量的组件除以另一个矢量的组件。
     * @static
     * @param {Vector2} value1 源矢量。
     * @param {Vector2} value2 除数矢量。
     * @returns {Vector2} 结果矢量。
     */
    static Divide(value1: Vector2, value2: Vector2): Vector2;

    /**
     * 计算两个矢量的点积。如果两个矢量均为单位矢量，则点积返回 -1 到 1 之间的浮点值，该值可以用来确定两个矢量之间的角度的一些性质。例如，它可以显示这些矢量是正交、平行，还是互为锐角或钝角。
     * @static
     * @param {Vector2} value1 源矢量。
     * @param {Vector2} value2 源矢量。
     * @returns {Number} 点积。
     */
    static Dot(value1: Vector2, value2: Vector2): Number;

    /**
     * 执行 Hermite 样条插值。
     * @static
     * @param {Vector2} value1 源位置矢量。
     * @param {Vector2} tangent1 源切线矢量。
     * @param {Vector2} value2 源位置矢量。
     * @param {Vector2} tangent2 源切线矢量。
     * @param {Number} amount 权重因子。
     * @returns {Vector2} 插值结果。
     */
    static Hermite(value1: Vector2, tangent1: Vector2, value2: Vector2, tangent2: Vector2, amount: Number): Vector2;

    /**
     * 在两个矢量之间执行线性插值。
     * @static
     * @param {Vector2} value1 源矢量。
     * @param {Vector2} value2 源矢量。
     * @param {Number} amount 指示 value2 权重的 0 到 1 之间的值。
     * @returns {Vector2} 插值结果。
     */
    static Lerp(value1: Vector2, value2: Vector2, amount: Number): Vector2;

    /**
     * 从每个匹配的组件对中返回包含最大值的矢量。
     * @static
     * @param {Vector2} value1 源矢量。
     * @param {Vector2} value2 源矢量。
     * @returns {Vector2} 结果矢量。
     */
    static Max(value1: Vector2, value2: Vector2): Vector2;

    /**
     * 从每个匹配的组件对中返回包含最小值的矢量。
     * @static
     * @param {Vector2} value1 源矢量。
     * @param {Vector2} value2 源矢量。
     * @returns {Vector2} 结果矢量。
     */
    static Min(value1: Vector2, value2: Vector2): Vector2;

    /**
     * 将一个矢量乘以一个标量值。
     * @static
     * @param {Vector2} value1 源矢量。
     * @param {Number} scaleFactor 标量值。
     * @returns {Vector2} 结果矢量。
     */
    static Multiply(value1: Vector2, scaleFactor: Number): Vector2;

    /**
     * 将两个矢量的组件彼此相乘。
     * @static
     * @param {Vector2} value1 源矢量。
     * @param {Vector2} value2 源矢量。
     * @returns {Vector2} 结果矢量。
     */
    static Multiply(value1: Vector2, value2: Vector2): Vector2;

    /**
     * 返回指向反方向的矢量。
     * @static
     * @param {Vector2} value 源矢量。
     * @returns {Vector2} 结果矢量。
     */
    static Negate(value: Vector2): Vector2;

    /**
     * 根据指定的矢量创建单位矢量。结果是与原始矢量相同方向的长度矢量单位。
     * @static
     * @param {Vector2} value 源 Vector2。
     * @returns {Vector2} 结果矢量。
     */
    static Normalize(value: Vector2): Vector2;

    /**
     * 确定给定矢量和法线的反射矢量。
     * @static
     * @param {Vector2} vector 源矢量。
     * @param {Vector2} normal vector 的法线。
     * @returns {Vector2} 结果矢量。
     */
    static Reflect(vector: Vector2, normal: Vector2): Vector2;

    /**
     * 使用三次方程计算两个值之间的插值。
     * @static
     * @param {Vector2} value1 源值。
     * @param {Vector2} value2 源值。
     * @param {Number} amount 权重值。
     * @returns {Vector2} 矢量插值结果。
     */
    static SmoothStep(value1: Vector2, value2: Vector2, amount: Number): Vector2;

    /**
     * 将一个矢量减去一个矢量。
     * @static
     * @param {Vector2} value1 源矢量。
     * @param {Vector2} value2 源矢量。
     * @returns {Vector2} 结果矢量。
     */
    static Subtract(value1: Vector2, value2: Vector2): Vector2;

    /**
     * 通过指定矩阵变换矢量 (x, y, 0, 1)。
     * @static
     * @param {Vector2} position 源矢量。
     * @param {Matrix} matrix 变换矩阵。
     * @returns {Vector2} 结果矢量。
     */
    static Transform(position: Vector2, matrix: Matrix): Vector2;

    /**
     * 通过指定 Quaternion 旋转变换单个 Vector2 或矢量法线 (x, y, 0, 0)。
     * @static
     * @param {Vector2} value 要旋转的矢量。
     * @param {Quaternion} rotation 要应用的 Quaternion 旋转。
     * @returns {Vector2} 结果矢量。
     */
    static Transform(value: Vector2, rotation: Quaternion): Vector2;

    /**
     * 通过指定 Matrix 变换 Vector2 数组中的指定范围，并将结果放置在目标数组的指定范围内。
     * @static
     * @param {Vector2[]} sourceArray 源数组。
     * @param {Number} sourceIndex 源数组中要变换的首个 Vector2 的索引。
     * @param {Matrix} matrix 要通过其变换的 Matrix。
     * @param {Vector2[]} destinationArray 结果 Vector2 将被写入的目标数组。
     * @param {Number} destinationIndex 目标数组中应将首个结果 Vector2 写入到的位置的索引。
     * @param {Number} length 要变换的 Vector2 的数量。
     * @returns {void}
     */
    static Transform(sourceArray: Vector2[], sourceIndex: Number, matrix: Matrix, destinationArray: Vector2[], destinationIndex: Number, length: Number): void;

    /**
     * 通过指定 Quaternion 变换 Vector2 数组中的指定范围，并将结果放置在目标数组的指定范围内。
     * @static
     * @param {Vector2[]} sourceArray 源数组。
     * @param {Number} sourceIndex 源数组中要变换的首个 Vector2 的索引。
     * @param {Quaternion} rotation 要应用的 Quaternion 旋转。
     * @param {Vector2[]} destinationArray 结果 Vector2 被写入的目标数组。
     * @param {Number} destinationIndex 目标数组中应将首个结果 Vector2 写入到的位置的索引。
     * @param {Number} length 要变换的 Vector2 的数量。
     * @returns {void}
     */
    static Transform(sourceArray: Vector2[], sourceIndex: Number, rotation: Quaternion, destinationArray: Vector2[], destinationIndex: Number, length: Number): void;

    /**
     * 通过指定 Matrix 变换 Vector2 数组。
     * @static
     * @param {Vector2[]} sourceArray 要变换的 Vector2 数组。
     * @param {Matrix} matrix 要应用的变换 Matrix。
     * @param {Vector2[]} destinationArray 变换后的 Vector2 被写入的现有数组。
     * @returns {void}
     */
    static Transform(sourceArray: Vector2[], matrix: Matrix, destinationArray: Vector2[]): void;

    /**
     * 通过指定 Quaternion 变换 Vector2 数组。
     * @static
     * @param {Vector2[]} sourceArray 要变换的 Vector2 数组。
     * @param {Quaternion} rotation 要使用的变换 Matrix。
     * @param {Vector2[]} destinationArray 变换后的 Vector2 被写入的现有数组。
     * @returns {void}
     */
    static Transform(sourceArray: Vector2[], rotation: Quaternion, destinationArray: Vector2[]): void;

    /**
     * 通过矩阵变换 2D 矢量法线。
     * @static
     * @param {Vector2} normal 源矢量。
     * @param {Matrix} matrix 变换矩阵。
     * @returns {Vector2} 结果矢量。
     */
    static TransformNormal(normal: Vector2, matrix: Matrix): Vector2;

    /**
     * 通过指定 Matrix 变换 Vector2 矢量法线数组中的指定范围，并将结果放置在目标数组的指定范围内。
     * @static
     * @param {Vector2[]} sourceArray 源数组。
     * @param {Number} sourceIndex 源数组中要变换的首个 Vector2 的索引。
     * @param {Matrix} matrix 要应用的 Matrix。
     * @param {Vector2[]} destinationArray 结果 Vector2 被写入的目标数组。
     * @param {Number} destinationIndex 目标数组中应将首个结果 Vector2 写入到的位置的索引。
     * @param {Number} length 要变换的矢量法线的数量。
     * @returns {void}
     */
    static TransformNormal(sourceArray: Vector2[], sourceIndex: Number, matrix: Matrix, destinationArray: Vector2[], destinationIndex: Number, length: Number): void;

    /**
     * 通过指定 Matrix 变换 Vector2 矢量法线数组。
     * @static
     * @param {Vector2[]} sourceArray 要变换的矢量法线数组。
     * @param {Matrix} matrix 要应用的变换 Matrix。
     * @param {Vector2[]} destinationArray 变换后的矢量法线被写入的现有数组。
     * @returns {void}
     */
    static TransformNormal(sourceArray: Vector2[], matrix: Matrix, destinationArray: Vector2[]): void;

    /**
     * 确定指定的 Object 是否等于 Vector2。
     * @param {Vector2} other 用于与当前 Vector2 比较的 Object。
     * @returns {Boolean} 是否相等。
     */
    Equals(other: Vector2): Boolean;

    /**
     * 返回指示当前实例是否等于指定对象的值。
     * @param {Object} obj 用于进行比较的对象。
     * @returns {Boolean} 是否相等。
     */
    Equals(obj: Object): Boolean;

    /**
     * 计算矢量的长度。
     * @returns {Number} 矢量的长度。
     */
    Length(): Number;

    /**
     * 计算平方矢量的长度。
     * @returns {Number} 平方矢量的长度。
     */
    LengthSquared(): Number;

    /**
     * 将当前矢量转为单位矢量。结果是与原始矢量相同方向的长度矢量单位。
     * @returns {void}
     */
    Normalize(): void;

    /**
     * 检索当前对象的字符串呈现。
     * @returns {String} 当前对象的字符串呈现。
     */
    ToString(): String;
}
