import Base from "../Core/Base.js";
import Vector2 from "./Vector2.js";
import Matrix from "./Matrix.js";
import Quaternion from "./Quaternion.js";

/**
 * 定义具有三个组件的矢量。
 * @class
 */
export default class Vector3 extends Base {
    /**
     * 返回在右手坐标系 (0, 0, 1) 中指定向后方向的单位 Vector3。
     * @static
     * @readonly
     */
    static readonly Backward: Vector3;

    /**
     * 返回指定向下方向 (0, −1, 0) 的单位 Vector3。
     * @static
     * @readonly
     */
    static readonly Down: Vector3;

    /**
     * 返回在右手坐标系 (0, 0,−1) 中指定向前方向的单位 Vector3。
     * @static
     * @readonly
     */
    static readonly Forward: Vector3;

    /**
     * 返回指定向左方向 (−1, 0, 0) 的单位 Vector3。
     * @static
     * @readonly
     */
    static readonly Left: Vector3;

    /**
     * 返回所有组件为一体的 Vector3。
     * @static
     * @readonly
     */
    static readonly One: Vector3;

    /**
     * 返回指向右侧 (1, 0, 0) 的单位 Vector3。
     * @static
     * @readonly
     */
    static readonly Right: Vector3;

    /**
     * 返回 x 单位 Vector3 (1, 0, 0)。
     * @static
     * @readonly
     */
    static readonly UnitX: Vector3;

    /**
     * 返回 y 单位 Vector3 (0, 1, 0)。
     * @static
     * @readonly
     */
    static readonly UnitY: Vector3;

    /**
     * 返回 z 单位 Vector3 (0, 0, 1)。
     * @static
     * @readonly
     */
    static readonly UnitZ: Vector3;

    /**
     * 返回一个指定向上方向 (0, 1, 0) 的单位矢量。
     * @static
     * @readonly
     */
    static readonly Up: Vector3;

    /**
     * 返回所有组件均设置为零的 Vector3。
     * @static
     * @readonly
     */
    static readonly Zero: Vector3;

    /**
     * 获取或设置矢量的 x 色差。
     */
    X: Number;

    /**
     * 获取或设置矢量的 y 色差。
     */
    Y: Number;

    /**
     * 获取或设置矢量的 z 色差。
     */
    Z: Number;

    constructor();

    /**
     * 新建 Vector3 实例。
     * @constructor
     * @param {Number} value 每个色差的初始化值。
     * @returns {Vector3} Vector3 实例。
     */
    constructor(value: Number);

    /**
     * 初始化新的 Vector3 实例。
     * @constructor
     * @param {Number} x 矢量 x 色差的初始值。
     * @param {Number} y 矢量 y 色差的初始值。
     * @param {Number} z 矢量 z 色差的初始值。
     * @returns {Vector3} Vector3 实例。
     */
    constructor(x: Number, y: Number, z: Number);

    /**
     * 初始化新的 Vector3 实例。
     * @constructor
     * @param {Vector2} value 包含 x 和 y 色差的初始化值的矢量。
     * @param {Number} z 矢量 z 色差的初始值。
     * @returns {Vector3} Vector3 实例。
     */
    constructor(value: Vector2, z: Number);

    /**
     * 将两个矢量相加。
     * @static
     * @param {Vector3} value1 源矢量。
     * @param {Vector3} value2 源矢量。
     * @returns {Vector3} 相加后的矢量。
     */
    static Add(value1: Vector3, value2: Vector3): Vector3;

    /**
     * 返回一个相对于 3D 三角形的质心坐标中某指定点的 3D Cartesian 坐标所在的 Vector3。
     * @static
     * @param {Vector3} value1 包含三角形顶点 1 的 3D Cartesian 坐标的 Vector3。
     * @param {Vector3} value2 包含三角形顶点 2 的 3D Cartesian 坐标的 Vector3。
     * @param {Vector3} value3 包含三角形顶点 3 的 3D Cartesian 坐标的 Vector3。
     * @param {Number} amount1 质心坐标 b2，用于表达趋向顶点 2 的权重因子（在 value2 中指定）。
     * @param {Number} amount2 质心坐标 b3，用于表达趋向顶点 3 的权重因子（在 value3 中指定）。
     * @returns {Vector3} 相对于 3D 三角形的质心坐标中某指定点的 3D Cartesian 坐标所在的 Vector3。
     */
    static Barycentric(value1: Vector3, value2: Vector3, value3: Vector3, amount1: Number, amount2: Number): Vector3;

    /**
     * 用指定的位置执行 Catmull-Rom 插值。
     * @static
     * @param {Vector3} value1 插值中的第一个位置。
     * @param {Vector3} value2 插值中的第二个位置。
     * @param {Vector3} value3 插值中的第三个位置。
     * @param {Vector3} value4 插值中的第四个位置。
     * @param {Number} amount 权重因子。
     * @returns {Vector3} 插值结果。
     */
    static CatmullRom(value1: Vector3, value2: Vector3, value3: Vector3, value4: Vector3, amount: Number): Vector3;

    /**
     * 将值限制在指定范围内。
     * @static
     * @param {Vector3} value1 要限制的值。
     * @param {Vector3} min 最小值。
     * @param {Vector3} max 最大值。
     * @returns {Vector3} 限制后的值。
     */
    static Clamp(value1: Vector3, min: Vector3, max: Vector3): Vector3;

    /**
     * 计算两个矢量的叉积。
     * @static
     * @param {Vector3} vector1 源矢量。
     * @param {Vector3} vector2 源矢量。
     * @returns {Vector3} 两个矢量的叉积。
     */
    static Cross(vector1: Vector3, vector2: Vector3): Vector3;

    /**
     * 计算两个矢量之间的距离。
     * @static
     * @param {Vector3} value1 源矢量。
     * @param {Vector3} value2 源矢量。
     * @returns {Number} 两个矢量之间的距离。
     */
    static Distance(value1: Vector3, value2: Vector3): Number;

    /**
     * 计算两个平方矢量之间的距离。
     * @static
     * @param {Vector3} value1 源矢量。
     * @param {Vector3} value2 源矢量。
     * @returns {Number} 两个平方矢量之间的距离。
     */
    static DistanceSquared(value1: Vector3, value2: Vector3): Number;

    /**
     * 用一个矢量除以一个标量值。
     * @static
     * @param {Vector3} value1 源矢量。
     * @param {Number} value2 除数。
     * @returns {Vector3} 结果矢量。
     */
    static Divide(value1: Vector3, value2: Number): Vector3;

    /**
     * 用一个矢量的组件除以另一个矢量的组件。
     * @static
     * @param {Vector3} value1 源矢量。
     * @param {Vector3} value2 除数矢量。
     * @returns {Vector3} 结果矢量。
     */
    static Divide(value1: Vector3, value2: Vector3): Vector3;

    /**
     * 计算两个矢量的点积。如果两个矢量均为单位矢量，则点积返回 -1 到 1 之间的浮点值，该值可以用来确定两个矢量之间的角度的一些性质。例如，它可以显示这些矢量是正交、平行，还是互为锐角或钝角。
     * @static
     * @param {Vector3} vector1 源矢量。
     * @param {Vector3} vector2 源矢量。
     * @returns {Number} 点积。
     */
    static Dot(vector1: Vector3, vector2: Vector3): Number;

    /**
     * 执行 Hermite 样条插值。
     * @static
     * @param {Vector3} value1 源位置矢量。
     * @param {Vector3} tangent1 源切线矢量。
     * @param {Vector3} value2 源位置矢量。
     * @param {Vector3} tangent2 源切线矢量。
     * @param {Number} amount 权重因子。
     * @returns {Vector3} 插值结果。
     */
    static Hermite(value1: Vector3, tangent1: Vector3, value2: Vector3, tangent2: Vector3, amount: Number): Vector3;

    /**
     * 在两个矢量之间执行线性插值。
     * @static
     * @param {Vector3} value1 源矢量。
     * @param {Vector3} value2 源矢量。
     * @param {Number} amount 指示 value2 权重的 0 到 1 之间的值。
     * @returns {Vector3} 插值结果。
     */
    static Lerp(value1: Vector3, value2: Vector3, amount: Number): Vector3;

    /**
     * 从每个匹配的组件对中返回包含最大值的矢量。
     * @static
     * @param {Vector3} value1 源矢量。
     * @param {Vector3} value2 源矢量。
     * @returns {Vector3} 结果矢量。
     */
    static Max(value1: Vector3, value2: Vector3): Vector3;

    /**
     * 从每个匹配的组件对中返回包含最小值的矢量。
     * @static
     * @param {Vector3} value1 源矢量。
     * @param {Vector3} value2 源矢量。
     * @returns {Vector3} 结果矢量。
     */
    static Min(value1: Vector3, value2: Vector3): Vector3;

    /**
     * 将一个矢量乘以一个标量值。
     * @static
     * @param {Vector3} value1 源矢量。
     * @param {Number} scaleFactor 标量值。
     * @returns {Vector3} 结果矢量。
     */
    static Multiply(value1: Vector3, scaleFactor: Number): Vector3;

    /**
     * 将两个矢量的组件彼此相乘。
     * @static
     * @param {Vector3} value1 源矢量。
     * @param {Vector3} value2 源矢量。
     * @returns {Vector3} 结果矢量。
     */
    static Multiply(value1: Vector3, value2: Vector3): Vector3;

    /**
     * 返回指向反方向的矢量。
     * @static
     * @param {Vector3} value 源矢量。
     * @returns {Vector3} 结果矢量。
     */
    static Negate(value: Vector3): Vector3;

    /**
     * 根据指定的矢量创建单位矢量。结果是与原始矢量相同方向的长度矢量单位。
     * @static
     * @param {Vector3} value 源 Vector3。
     * @returns {Vector3} 结果矢量。
     */
    static Normalize(value: Vector3): Vector3;

    /**
     * 返回具有指定法线的表面的矢量反射。
     * @static
     * @param {Vector3} vector 源矢量。
     * @param {Vector3} normal 表面的法线。
     * @returns {Vector3} 结果矢量。
     */
    static Reflect(vector: Vector3, normal: Vector3): Vector3;

    /**
     * 使用三次方程计算两个值之间的插值。
     * @static
     * @param {Vector3} value1 源值。
     * @param {Vector3} value2 源值。
     * @param {Number} amount 权重值。
     * @returns {Vector3} 插值结果。
     */
    static SmoothStep(value1: Vector3, value2: Vector3, amount: Number): Vector3;

    /**
     * 将一个矢量减去一个矢量。
     * @static
     * @param {Vector3} value1 源矢量。
     * @param {Vector3} value2 源矢量。
     * @returns {Vector3} 结果矢量。
     */
    static Subtract(value1: Vector3, value2: Vector3): Vector3;

    /**
     * 通过给定矩阵变换 3D 矢量。
     * @static
     * @param {Vector3} position 源矢量。
     * @param {Matrix} matrix 变换矩阵。
     * @returns {Vector3} 结果矢量。
     */
    static Transform(position: Vector3, matrix: Matrix): Vector3;

    /**
     * 通过指定 Quaternion 旋转变换 Vector3。
     * @static
     * @param {Vector3} value 要旋转的 Vector3。
     * @param {Quaternion} rotation 要应用的 Quaternion 旋转。
     * @returns {Vector3} 结果矢量。
     */
    static Transform(value: Vector3, rotation: Quaternion): Vector3;

    /**
     * 将指定变换 Matrix 应用到 Vector3 数组的指定范围，并将结果写入到目标数组的指定范围。
     * @static
     * @param {Vector3[]} sourceArray 源数组。
     * @param {Number} sourceIndex 要启动的源数组中的索引。
     * @param {Matrix} matrix 要应用的变换 Matrix。
     * @param {Vector3[]} destinationArray 现有目标数组。
     * @param {Number} destinationIndex 要启动的目标数组中的索引。
     * @param {Number} length 要变换的 Vector3 数量。
     * @returns {void}
     */
    static Transform(sourceArray: Vector3[], sourceIndex: Number, matrix: Matrix, destinationArray: Vector3[], destinationIndex: Number, length: Number): void;

    /**
     * 将指定 Quaternion 旋转应用到 Vector3 数组的指定范围，并将结果写入到目标数组的指定范围。
     * @static
     * @param {Vector3[]} sourceArray 源数组。
     * @param {Number} sourceIndex 要启动的源数组中的索引。
     * @param {Quaternion} rotation 要应用的 Quaternion 旋转。
     * @param {Vector3[]} destinationArray 现有目标数组。
     * @param {Number} destinationIndex 要启动的目标数组中的索引。
     * @param {Number} length 要变换的 Vector3 数量。
     * @returns {void}
     */
    static Transform(sourceArray: Vector3[], sourceIndex: Number, rotation: Quaternion, destinationArray: Vector3[], destinationIndex: Number, length: Number): void;

    /**
     * 通过指定 Matrix 变换 Vector3 的源数组，并将结果写入现有的目标数组。
     * @static
     * @param {Vector3[]} sourceArray 源数组。
     * @param {Matrix} matrix 要应用的变换 Matrix。
     * @param {Vector3[]} destinationArray 变换后的 Vector3 被写入的现有目标数组。
     * @returns {void}
     */
    static Transform(sourceArray: Vector3[], matrix: Matrix, destinationArray: Vector3[]): void;

    /**
     * 通过指定 Quaternion 旋转变换 Vector3 的源数组，并将结果写入现有的目标数组。
     * @static
     * @param {Vector3[]} sourceArray 源数组。
     * @param {Quaternion} rotation 要应用的 Quaternion 旋转。
     * @param {Vector3[]} destinationArray 变换后的 Vector3 被写入的现有目标数组。
     * @returns {void}
     */
    static Transform(sourceArray: Vector3[], rotation: Quaternion, destinationArray: Vector3[]): void;

    /**
     * 通过矩阵变换 3D 矢量法线。
     * @static
     * @param {Vector3} normal 源矢量。
     * @param {Matrix} matrix 变换矩阵。
     * @returns {Vector3} 变换后的矢量。
     */
    static TransformNormal(normal: Vector3, matrix: Matrix): Vector3;

    /**
     * 通过指定 Matrix 变换 3D 矢量法线数组中的指定范围，并将结果写入目标数组的指定范围内。
     * @static
     * @param {Vector3[]} sourceArray Vector3 法线的源数组。
     * @param {Number} sourceIndex 源数组中的起始索引。
     * @param {Matrix} matrix 要应用的变换 Matrix。
     * @param {Vector3[]} destinationArray 目标 Vector3 数组。
     * @param {Number} destinationIndex 目标数组中的起始索引。
     * @param {Number} length 要变换的矢量的数量。
     * @returns {void}
     */
    static TransformNormal(sourceArray: Vector3[], sourceIndex: Number, matrix: Matrix, destinationArray: Vector3[], destinationIndex: Number, length: Number): void;

    /**
     * 通过指定 Matrix 变换 3D 矢量法线数组。
     * @static
     * @param {Vector3[]} sourceArray 要变换的 Vector3 法线数组。
     * @param {Matrix} matrix 要应用的变换矩阵。
     * @param {Vector3[]} destinationArray 要将变换结果写入到的现有 Vector3 数组。
     * @returns {void}
     */
    static TransformNormal(sourceArray: Vector3[], matrix: Matrix, destinationArray: Vector3[]): void;

    /**
     * 确定指定的 Object 是否等于 Vector3。
     * @param {Vector3} other 用于与当前 Vector3 比较的 Vector3。
     * @returns {Boolean} 是否相等。
     */
    Equals(other: Vector3): Boolean;

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
