import Base from "../Core/Base.js";
import Vector3 from "./Vector3.js";
import Vector4 from "./Vector4.js";
import Quaternion from "./Quaternion.js";
import Matrix from "./Matrix.js";
import BoundingBox from "./BoundingBox.js";
import BoundingFrustum from "./BoundingFrustum.js";
import BoundingSphere from "./BoundingSphere.js";
import PlaneIntersectionType from "./PlaneIntersectionType.js";

/**
 * 定义一个平面。
 * @class
 */
export default class Plane extends Base {
    /**
     * Plane 的法线矢量。
     */
    Normal: Vector3;

    /**
     * Plane 从原点位置起沿法线方向的距离。
     */
    D: Number;

    constructor();

    /**
     * 新建 Plane 实例。
     * @constructor
     * @param {Number} a 定义 Plane 的法线 x 色差。
     * @param {Number} b 定义 Plane 的法线 y 色差。
     * @param {Number} c 定义 Plane 的法线 z 色差。
     * @param {Number} d Plane 从原点位置起沿法线方向的距离。
     * @returns {Plane} Plane 实例。
     */
    constructor(a: Number, b: Number, c: Number, d: Number);

    /**
     * 新建 Plane 实例。
     * @constructor
     * @param {Vector3} normal Plane 的法线矢量。
     * @param {Number} d Plane 从原点位置起沿法线方向的距离。
     * @returns {Plane} Plane 实例。
     */
    constructor(normal: Vector3, d: Number);

    /**
     * 新建 Plane 实例。
     * @constructor
     * @param {Vector3} point1 一个定义 Plane 的三角形点。
     * @param {Vector3} point2 一个定义 Plane 的三角形点。
     * @param {Vector3} point3 一个定义 Plane 的三角形点。
     * @returns {Plane} Plane 实例。
     */
    constructor(point1: Vector3, point2: Vector3, point3: Vector3);

    /**
     * 新建 Plane 实例。
     * @constructor
     * @param {Vector4} value 带有 X、Y 和 Z 色差（定义 Plane 的法线）的 Vector4。W 色差定义 Plane 从原点位置起沿法线方向的距离。
     * @returns {Plane} Plane 实例。
     */
    constructor(value: Vector4);

    /**
     * 更改 Plane 的 Normal 矢量系数以使其成为单位长度。
     * @static
     * @param {Plane} value 要法线化的 Plane。
     * @returns {Plane} 更改为单位长度的 Plane。
     */
    static Normalize(value: Plane): Plane;

    /**
     * 通过 Matrix 变换法线化 Plane。
     * @static
     * @param {Plane} plane 要变换的法线化 Plane。该 Plane 必须已进行法线化处理，以便在调用此方法前，其 Normal 矢量为单位长度。
     * @param {Matrix} matrix 要应用到 Plane 的变换 Matrix。
     * @returns {Plane} 变化后的 Plane。
     */
    static Transform(plane: Plane, matrix: Matrix): Plane;

    /**
     * 通过 Quaternion 旋转变换法线化 Plane。
     * @static
     * @param {Plane} plane 要变换的法线化 Plane。该 Plane 必须已进行法线化处理，以便在调用此方法前，其 Normal 矢量为单位长度。
     * @param {Quaternion} rotation 要应用到 Plane 的 Quaternion 旋转。
     * @returns {Plane} 变化后的 Plane。
     */
    static Transform(plane: Plane, rotation: Quaternion): Plane;

    /**
     * 计算指定的 Vector4 和此 Plane 的点积。
     * @param {Vector4} value 要乘以此 Plane 的 Vector4。
     * @returns {Number} 点积。
     */
    Dot(value: Vector4): Number;

    /**
     * 返回指定的 Vector3 和此 Plane 的 Normal 矢量的点积加上 Plane 的距离 (D) 值。
     * @param {Vector3} value 要乘以的 Vector3。
     * @returns {Number} 点积加上 Plane 的距离 (D) 值。
     */
    DotCoordinate(value: Vector3): Number;

    /**
     * 返回指定的 Vector3 和此 Plane 的 Normal 矢量的点积。
     * @param {Vector3} value 要乘以的 Vector3。
     * @returns {Number} 点积。
     */
    DotNormal(value: Vector3): Number;

    /**
     * 确定指定的 Plane 是否等于 Plane。
     * @param {Plane} other 用于与当前 Plane 比较的 Plane。
     * @returns {Boolean} 是否相等。
     */
    Equals(other: Plane): Boolean;

    /**
     * 确定指定的 Object 是否等于 Plane。
     * @param {Object} obj 用于与当前 Plane 比较的 Object。
     * @returns {Boolean} 是否相等。
     */
    Equals(obj: Object): Boolean;

    /**
     * 检查当前 Plane 是否与指定的 BoundingBox 相交。
     * @param {BoundingBox} box 用于相交测试的 BoundingBox。
     * @returns {PlaneIntersectionType} 相交匹配值。
     */
    Intersects(box: BoundingBox): PlaneIntersectionType;

    /**
     * 检查当前 Plane 是否与指定的 BoundingFrustum 相交。
     * @param {BoundingFrustum} frustum 用于相交检查的 BoundingFrustum。
     * @returns {PlaneIntersectionType} 相交匹配值。
     */
    Intersects(frustum: BoundingFrustum): PlaneIntersectionType;

    /**
     * 检查当前 Plane 是否与指定的 BoundingSphere 相交。
     * @param {BoundingSphere} sphere 用于相交检查的 BoundingSphere。
     * @returns {PlaneIntersectionType} 相交匹配值。
     */
    Intersects(sphere: BoundingSphere): PlaneIntersectionType;

    /**
     * 更改该 Plane 的 Normal 矢量系数以使其成为单位长度。
     * @returns {void}
     */
    Normalize(): void;

    /**
     * 返回呈现当前 Plane 的 String。
     * @returns {String} 呈现当前 Plane 的 String。
     */
    ToString(): String;
}
