import Base from "../Core/Base.js";
import Vector3 from "./Vector3.js";
import Quaternion from "./Quaternion.js";
import Plane from "./Plane.js";

/**
 * 定义一个矩阵。
 * @class
 */
export default class Matrix extends Base {
    /**
     * 返回标识矩阵的实例。
     * @static
     * @readonly
     */
    static readonly Identity: Matrix;

    /**
     * 矩阵的行 1 列 1 的值。
     */
    M11: Number;

    /**
     * 矩阵的行 1 列 2 的值。
     */
    M12: Number;

    /**
     * 矩阵的行 1 列 3 的值。
     */
    M13: Number;

    /**
     * 矩阵的行 1 列 4 的值。
     */
    M14: Number;

    /**
     * 矩阵的行 2 列 1 的值。
     */
    M21: Number;

    /**
     * 矩阵的行 2 列 2 的值。
     */
    M22: Number;

    /**
     * 矩阵的行 2 列 3 的值。
     */
    M23: Number;

    /**
     * 矩阵的行 2 列 4 的值。
     */
    M24: Number;

    /**
     * 矩阵的行 3 列 1 的值。
     */
    M31: Number;

    /**
     * 矩阵的行 3 列 2 的值。
     */
    M32: Number;

    /**
     * 矩阵的行 3 列 3 的值。
     */
    M33: Number;

    /**
     * 矩阵的行 3 列 4 的值。
     */
    M34: Number;

    /**
     * 矩阵的行 4 列 1 的值。
     */
    M41: Number;

    /**
     * 矩阵的行 4 列 2 的值。
     */
    M42: Number;

    /**
     * 矩阵的行 4 列 3 的值。
     */
    M43: Number;

    /**
     * 矩阵的行 4 列 4 的值。
     */
    M44: Number;

    /**
     * 获取或设置 Matrix 的后向矢量。
     */
    Backward: Vector3;

    /**
     * 获取或设置 Matrix 的向下矢量。
     */
    Down: Vector3;

    /**
     * 获取或设置 Matrix 的向前矢量。
     */
    Forward: Vector3;

    /**
     * 获取和设置 Matrix 的向左矢量。
     */
    Left: Vector3;

    /**
     * 获取和设置 Matrix 的向右矢量。
     */
    Right: Vector3;

    /**
     * 获取或设置 Matrix 的平移矢量。
     */
    Translation: Vector3;

    /**
     * 获取或设置 Matrix 的向上矢量。
     */
    Up: Vector3;

    constructor();

    /**
     * 初始化新的 Matrix 实例。
     * @constructor
     * @param {Number} m11 m11 的初始化值。
     * @param {Number} m12 m12 的初始化值。
     * @param {Number} m13 m13 的初始化值。
     * @param {Number} m14 m14 的初始化值。
     * @param {Number} m21 m21 的初始化值。
     * @param {Number} m22 m22 的初始化值。
     * @param {Number} m23 m23 的初始化值。
     * @param {Number} m24 m24 的初始化值。
     * @param {Number} m31 m31 的初始化值。
     * @param {Number} m32 m32 的初始化值。
     * @param {Number} m33 m33 的初始化值。
     * @param {Number} m34 m34 的初始化值。
     * @param {Number} m41 m41 的初始化值。
     * @param {Number} m42 m42 的初始化值。
     * @param {Number} m43 m43 的初始化值。
     * @param {Number} m44 m44 的初始化值。
     * @returns {Matrix} Matrix 实例。
     */
    constructor(
        m11: Number, m12: Number, m13: Number, m14: Number,
        m21: Number, m22: Number, m23: Number, m24: Number,
        m31: Number, m32: Number, m33: Number, m34: Number,
        m41: Number, m42: Number, m43: Number, m44: Number
    );

    /**
     * 将一个矩阵添加到另一个矩阵。
     * @static
     * @param {Matrix} matrix1 源矩阵。
     * @param {Matrix} matrix2 源矩阵。
     * @returns {Matrix} 包含矩阵1和矩阵2的总和值的矩阵。
     */
    static Add(matrix1: Matrix, matrix2: Matrix): Matrix;

    /**
     * 创建一个绕指定对象位置旋转的球形宣传物。
     * @static
     * @param {Vector3} objectPosition 宣传物围绕旋转的对象的位置。
     * @param {Vector3} cameraPosition 摄影机位置。
     * @param {Vector3} cameraUpVector 摄影机向上矢量。
     * @param {Vector3 | null} cameraForwardVector 可选的摄影机向前矢量。
     * @returns {Matrix} 创建的宣传位置。
     */
    static CreateBillboard(objectPosition: Vector3, cameraPosition: Vector3, cameraUpVector: Vector3, cameraForwardVector: Vector3 | null): Matrix;

    /**
     * 创建一个绕指定轴旋转的圆柱形宣传物。
     * @static
     * @param {Vector3} objectPosition 宣传物围绕旋转的对象的位置。
     * @param {Vector3} cameraPosition 摄影机位置。
     * @param {Vector3} rotateAxis 宣传物的旋转轴。
     * @param {Vector3 | null} cameraForwardVector 可选的摄影机向前矢量。
     * @param {Vector3 | null} objectForwardVector 可选的对象向前矢量。
     * @returns {Matrix} 宣传位置矩阵。
     */
    static CreateConstrainedBillboard(objectPosition: Vector3, cameraPosition: Vector3, rotateAxis: Vector3, cameraForwardVector: Vector3 | null, objectForwardVector: Vector3 | null): Matrix;

    /**
     * 新建一个绕任意矢量旋转的 Matrix。
     * @static
     * @param {Vector3} axis 要围绕旋转的轴。
     * @param {Number} angle 绕矢量旋转的角度。
     * @returns {Matrix} 旋转矩阵。
     */
    static CreateFromAxisAngle(axis: Vector3, angle: Number): Matrix;

    /**
     * 从 Quaternion 创建一个旋转 Matrix。
     * @static
     * @param {Quaternion} quaternion 用于创建 Matrix 的 Quaternion。
     * @returns {Matrix} 旋转矩阵。
     */
    static CreateFromQuaternion(quaternion: Quaternion): Matrix;

    /**
     * 用指定的偏转、俯仰和侧滚新建旋转矩阵。
     * @static
     * @param {Number} yaw 绕 y 轴的旋转角度，以弧度计。
     * @param {Number} pitch 绕 x 轴的旋转角度，以弧度计。
     * @param {Number} roll 绕 z 轴的旋转角度，以弧度计。
     * @returns {Matrix} 旋转矩阵。
     */
    static CreateFromYawPitchRoll(yaw: Number, pitch: Number, roll: Number): Matrix;

    /**
     * 创建视图矩阵。
     * @static
     * @param {Vector3} cameraPosition 摄影机位置。
     * @param {Vector3} cameraTarget 摄影机指向的目标。
     * @param {Vector3} cameraUpVector 摄影机视点中的“上”方向。
     * @returns {Matrix} 视图矩阵。
     */
    static CreateLookAt(cameraPosition: Vector3, cameraTarget: Vector3, cameraUpVector: Vector3): Matrix;

    /**
     * 构建一个正交投影矩阵。
     * @static
     * @param {Number} width 视图体积宽度。
     * @param {Number} height 视图体积高度。
     * @param {Number} zNearPlane 视图体积的最小 z 值。
     * @param {Number} zFarPlane 视图体积的最大 z 值。
     * @returns {Matrix} 正交投影矩阵。
     */
    static CreateOrthographic(width: Number, height: Number, zNearPlane: Number, zFarPlane: Number): Matrix;

    /**
     * 构建一个定制的正交投影矩阵。
     * @static
     * @param {Number} left 视图体积的最小 x 值。
     * @param {Number} right 视图体积的最大 x 值。
     * @param {Number} bottom 视图体积的最小 y 值。
     * @param {Number} top 视图体积的最大 y 值。
     * @param {Number} zNearPlane 视图体积的最小 z 值。
     * @param {Number} zFarPlane 视图体积的最大 z 值。
     * @returns {Matrix} 正交投影矩阵。
     */
    static CreateOrthographicOffCenter(left: Number, right: Number, bottom: Number, top: Number, zNearPlane: Number, zFarPlane: Number): Matrix;

    /**
     * 构建一个透视投影矩阵并返回结果值。
     * @static
     * @param {Number} width 近处视图平面的视图体积宽度。
     * @param {Number} height 近处视图平面的视图体积高度。
     * @param {Number} nearPlaneDistance 与近处视图平面的距离。
     * @param {Number} farPlaneDistance 与远处视图平面的距离。
     * @returns {Matrix} 透视投影矩阵。
     */
    static CreatePerspective(width: Number, height: Number, nearPlaneDistance: Number, farPlaneDistance: Number): Matrix;

    /**
     * 构建一个基于视野的透视投影矩阵并返回值。
     * @static
     * @param {Number} fieldOfView y 方向的视野，以弧度计。
     * @param {Number} aspectRatio 纵横比，定义为视图空间宽度与高度的比率。 与视口纵横比匹配的属性 AspectRatio。
     * @param {Number} nearPlaneDistance 与近处视图平面的距离。
     * @param {Number} farPlaneDistance 与远处视图平面的距离。
     * @returns {Matrix} 透视投影矩阵。
     */
    static CreatePerspectiveFieldOfView(fieldOfView: Number, aspectRatio: Number, nearPlaneDistance: Number, farPlaneDistance: Number): Matrix;

    /**
     * 构建一个定制的透视投影矩阵。
     * @static
     * @param {Number} left 近处视图平面的视图体积的最小 x 值。
     * @param {Number} right 近处视图平面的视图体积的最大 x 值。
     * @param {Number} bottom 近处视图平面的视图体积的最小 y 值。
     * @param {Number} top 近处视图平面的视图体积的最大 y 值。
     * @param {Number} nearPlaneDistance 与近处视图平面的距离。
     * @param {Number} farPlaneDistance 与远处视图平面的距离。
     * @returns {Matrix} 透视投影矩阵。
     */
    static CreatePerspectiveOffCenter(left: Number, right: Number, bottom: Number, top: Number, nearPlaneDistance: Number, farPlaneDistance: Number): Matrix;

    /**
     * 创建一个反映指定 Plane 的相关坐标系的 Matrix。
     * @static
     * @param {Plane} value 要创建反射的 Plane。
     * @returns {Matrix} 表示反射的新矩阵。
     */
    static CreateReflection(value: Plane): Matrix;

    /**
     * 返回一个可绕 x 轴旋转一组顶点的矩阵。
     * @static
     * @param {Number} radians 绕 x 轴旋转的程度，以弧度计。请注意，您可以使用 ToRadians 将角度转换为弧度。
     * @returns {Matrix} 旋转矩阵。
     */
    static CreateRotationX(radians: Number): Matrix;

    /**
     * 返回一个可绕 y 轴旋转一组顶点的矩阵。
     * @static
     * @param {Number} radians 绕 y 轴旋转的程度，以弧度计。请注意，您可以使用 ToRadians 将角度转换为弧度。
     * @returns {Matrix} 旋转矩阵。
     */
    static CreateRotationY(radians: Number): Matrix;

    /**
     * 返回一个可绕 z 轴旋转一组顶点的矩阵。
     * @static
     * @param {Number} radians 绕 z 轴旋转的程度，以弧度计。请注意，您可以使用 ToRadians 将角度转换为弧度。
     * @returns {Matrix} 旋转矩阵。
     */
    static CreateRotationZ(radians: Number): Matrix;

    /**
     * 创建一个缩放 Matrix。
     * @static
     * @param {Number} scale 缩放程度。
     * @returns {Matrix} 缩放矩阵。
     */
    static CreateScale(scale: Number): Matrix;

    /**
     * 创建一个缩放 Matrix。
     * @static
     * @param {Number} xScale x 轴上的缩放值。
     * @param {Number} yScale y 轴上的缩放值。
     * @param {Number} zScale z 轴上的缩放值。
     * @returns {Matrix} 缩放矩阵。
     */
    static CreateScale(xScale: Number, yScale: Number, zScale: Number): Matrix;

    /**
     * 创建一个缩放 Matrix。
     * @static
     * @param {Vector3} scales x、y 和 z 轴上的缩放程度。
     * @returns {Matrix} 缩放矩阵。
     */
    static CreateScale(scales: Vector3): Matrix;

    /**
     * 创建一个将几何体展平为指定 Plane 的 Matrix（就像从指定的光源投射阴影）。
     * @static
     * @param {Vector3} lightDirection 指定投影灯光方向的 Vector3。
     * @param {Plane} plane 新矩阵为投射阴影而将几何体展平到的 Plane。
     * @returns {Matrix} 可以用于从指定方向将几何图形平展到指定三维平面上的新矩阵。
     */
    static CreateShadow(lightDirection: Vector3, plane: Plane): Matrix;

    /**
     * 创建一个平移 Matrix。
     * @static
     * @param {Number} xPosition x 轴上的平移值。
     * @param {Number} yPosition y 轴上的平移值。
     * @param {Number} zPosition z 轴上的平移值。
     * @returns {Matrix} 平移矩阵。
     */
    static CreateTranslation(xPosition: Number, yPosition: Number, zPosition: Number): Matrix;

    /**
     * 创建一个平移 Matrix。
     * @static
     * @param {Vector3} position x、y 和 z 轴上的平移程度。
     * @returns {Matrix} 平移矩阵。
     */
    static CreateTranslation(position: Vector3): Matrix;

    /**
     * 用指定的参数创建场景矩阵。
     * @static
     * @param {Vector3} position 对象位置。该值被用于平移操作。
     * @param {Vector3} forward 对象的前方方向。
     * @param {Vector3} up 对象的上方向；通常是 [0, 1, 0]。
     * @returns {Matrix} 场景矩阵。
     */
    static CreateWorld(position: Vector3, forward: Vector3, up: Vector3): Matrix;

    /**
     * 用矩阵组件除以标量。
     * @static
     * @param {Matrix} matrix1 源矩阵。
     * @param {Number} divider 除数。
     * @returns {Matrix} 操作后的新矩阵。
     */
    static Divide(matrix1: Matrix, divider: Number): Matrix;

    /**
     * 用一个矩阵的组件除以另一个矩阵的相应组件。
     * @static
     * @param {Matrix} matrix1 源矩阵。
     * @param {Matrix} matrix2 除数。
     * @returns {Matrix} 操作后的新矩阵。
     */
    static Divide(matrix1: Matrix, matrix2: Matrix): Matrix;

    /**
     * 计算矩阵的逆矩阵。
     * @static
     * @param {Matrix} matrix 源矩阵。
     * @returns {Matrix} 逆矩阵。
     */
    static Invert(matrix: Matrix): Matrix;

    /**
     * 在两个矩阵的对应值之间执行线性插值。
     * @static
     * @param {Matrix} matrix1 源矩阵。
     * @param {Matrix} matrix2 源矩阵。
     * @param {Number} amount 插值。
     * @returns {Matrix} 插值结果。
     */
    static Lerp(matrix1: Matrix, matrix2: Matrix, amount: Number): Matrix;

    /**
     * 将一个矩阵乘以一个标量值。
     * @static
     * @param {Matrix} matrix1 源矩阵。
     * @param {Number} scaleFactor 标量值。
     * @returns {Matrix} 缩放后的矩阵。
     */
    static Multiply(matrix1: Matrix, scaleFactor: Number): Matrix;

    /**
     * 将一个矩阵乘以另一个矩阵。
     * @static
     * @param {Matrix} matrix1 源矩阵。
     * @param {Matrix} matrix2 源矩阵。
     * @returns {Matrix} 乘积矩阵。
     */
    static Multiply(matrix1: Matrix, matrix2: Matrix): Matrix;

    /**
     * 将一个矩阵乘以另一个矩阵并赋值给额外矩阵。
     * @static
     * @param {Matrix} matrix1 源矩阵。
     * @param {Matrix} matrix2 源矩阵。
     * @param {Matrix} outMatrix 额外矩阵。
     * @returns {Matrix} 乘积矩阵。
     */
    static Multiply(matrix1: Matrix, matrix2: Matrix, outMatrix: Matrix): Matrix;

    /**
     * 对矩阵的单个元素求反。
     * @static
     * @param {Matrix} matrix 源矩阵。
     * @returns {Matrix} 求反后的矩阵。
     */
    static Negate(matrix: Matrix): Matrix;

    /**
     * 减去矩阵。
     * @static
     * @param {Matrix} matrix1 源矩阵。
     * @param {Matrix} matrix2 源矩阵。
     * @returns {Matrix} 包含从矩阵1中的每个元素中减去矩阵2中的对应元素得到的值的矩阵。
     */
    static Subtract(matrix1: Matrix, matrix2: Matrix): Matrix;

    /**
     * 通过应用 Quaternion 旋转变换 Matrix。
     * @static
     * @param {Matrix} value 要变换的 Matrix。
     * @param {Quaternion} rotation 要应用的旋转,表达为 Quaternion。
     * @returns {Matrix} 变换后的矩阵。
     */
    static Transform(value: Matrix, rotation: Quaternion): Matrix;

    /**
     * 转置矩阵的行和列。
     * @static
     * @param {Matrix} matrix 源矩阵。
     * @returns {Matrix} 转置矩阵。
     */
    static Transpose(matrix: Matrix): Matrix;

    /**
     * 从 3D 缩放/旋转/平移 (SRT) Matrix 中提取标量、平移和旋转组件。
     * @static
     * @param {Vector3} scale [OutAttribute] 转换矩阵的标量组件，表达为 Vector3。
     * @param {Quaternion} rotation [OutAttribute] 转换矩阵的旋转组件，表达为 Quaternion。
     * @param {Vector3} translation [OutAttribute] 转换矩阵的平移组件，表达为 Vector3。
     * @returns {Boolean} 是否可以被分解。
     */
    Decompose(scale: Vector3, rotation: Quaternion, translation: Vector3): Boolean;

    /**
     * 计算矩阵的决定因子。
     * @returns {Number} 矩阵的行列式。
     */
    Determinant(): Number;

    /**
     * 确定指定的 Object 是否等于 Matrix。
     * @param {Matrix} other 用于与当前 Matrix 比较的 Object。
     * @returns {Boolean} 是否相等。
     */
    Equals(other: Matrix): Boolean;

    /**
     * 返回指示当前实例是否等于指定对象的值。
     * @param {Object} obj 用于进行比较的对象。
     * @returns {Boolean} 是否相等。
     */
    Equals(obj: Object): Boolean;

    /**
     * 检索当前对象的字符串呈现。
     * @returns {String} 当前对象的字符串呈现。
     */
    ToString(): String;
}
