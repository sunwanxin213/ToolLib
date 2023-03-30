import Base from "../Core/Base.js";
import Vector3 from "./Vector3.js";
import Matrix from "./Matrix.js";
import Plane from "./Plane.js";
import Ray from "./Ray.js";
import BoundingSphere from "./BoundingSphere.js";
import BoundingBox from "./BoundingBox.js";
import ContainmentType from "./ContainmentType.js";
import PlaneIntersectionType from "./PlaneIntersectionType.js";

/**
 * 定义视锥并帮助确定图形是否与之相交。
 * @class
 */
export default class BoundingFrustum extends Base {
    /**
     * 指定 BoundingFrustum 中的角点总数 (8)。
     * @static
     * @readonly
     */
    static readonly CornerCount: Number;

    /**
     * 获取或设置描述此边界视锥的 Matrix。
     */
    Matrix: Matrix;

    /**
     * 获取 BoundingFrustum 的近处平面。
     */
    get Near(): Plane;

    /**
     * 获取 BoundingFrustum 的远处平面。
     */
    get Far(): Plane;

    /**
     * 获取 BoundingFrustum 的左平面。
     */
    get Left(): Plane;

    /**
     * 获取 BoundingFrustum 的右平面。
     */
    get Right(): Plane;

    /**
     * 获取 BoundingFrustum 的顶部平面。
     */
    get Top(): Plane;

    /**
     * 获取 BoundingFrustum 的底部平面。
     */
    get Bottom(): Plane;

    /**
     * 新建 BoundingFrustum 实例。
     * @param {Matrix} value 通常用于查看 × 投影矩阵的组合矩阵。
     * @returns {BoundingFrustum} BoundingFrustum 实例。
     */
    constructor(value: Matrix);

    /**
     * 检查当前 BoundingFrustum 中是否包含指定的 BoundingBox。
     * @param {BoundingBox} box 根据当前 BoundingFrustum 检查的 BoundingBox。
     * @returns {ContainmentType} 测试包含的结果。
     */
    Contains(box: BoundingBox): ContainmentType;

    /**
     * 检查当前 BoundingFrustum 中是否包含指定的 BoundingFrustum。
     * @param {BoundingFrustum} frustum 根据当前 BoundingFrustum 检查的 BoundingFrustum。
     * @returns {ContainmentType} 测试包含的结果。
     */
    Contains(frustum: BoundingFrustum): ContainmentType;

    /**
     * 检查当前 BoundingFrustum 中是否包含指定的 BoundingSphere。
     * @param {BoundingSphere} sphere 根据当前 BoundingFrustum 检查的 BoundingSphere。
     * @returns {ContainmentType} 测试包含的结果。
     */
    Contains(sphere: BoundingSphere): ContainmentType;

    /**
     * 检查当前 BoundingFrustum 中是否包含指定的点。
     * @param {Vector3} point 根据当前 BoundingFrustum 检查的点。
     * @returns {ContainmentType} 测试包含的结果。
     */
    Contains(point: Vector3): ContainmentType;

    /**
     * 确定指定的 BoundingFrustum 是否等于当前 BoundingFrustum。
     * @param {BoundingFrustum} other 用于与当前 BoundingFrustum 比较的 BoundingFrustum。
     * @returns {Boolean} 是否相等。
     */
    Equals(other: BoundingFrustum): Boolean;

    /**
     * 确定指定的 Object 是否等于 BoundingFrustum。
     * @param {Object} obj 用于与当前 BoundingFrustum 比较的 Object。
     * @returns {Boolean} 是否相等。
     */
    Equals(obj: Object): Boolean;

    /**
     * 获取组成 BoundingFrustum 角点的数据点数组。
     * @returns {Array<Vector3} 数据点数组。
     */
    GetCorners(): Array<Vector3>;

    /**
     * 获取组成 BoundingFrustum 角点的数据点数组。
     * @param {Array<Vector3>} corners 至少具备 8 个 Vector3 数据点的现有数组，此数组可以用来写入 BoundingFrustum 角点。
     * @returns {void}
     */
    GetCorners(corners: Array<Vector3>): void;

    /**
     * 检查当前 BoundingFrustum 是否与指定的 BoundingBox 相交。
     * @param {BoundingBox} box 用于相交检查的 BoundingBox。
     * @returns {Boolean} 是否相交。
     */
    Intersects(box: BoundingBox): Boolean;

    /**
     * 检查当前 BoundingFrustum 是否与指定的 BoundingFrustum 相交。
     * @param {BoundingFrustum} frustum 用于相交检查的 BoundingFrustum。
     * @returns {Boolean} 是否相交。
     */
    Intersects(frustum: BoundingFrustum): Boolean;

    /**
     * 检查当前 BoundingFrustum 是否与指定的 BoundingSphere 相交。
     * @param {BoundingSphere} sphere 用于相交检查的 BoundingSphere。
     * @returns {Boolean} 是否相交。
     */
    Intersects(sphere: BoundingSphere): Boolean;

    /**
     * 检查当前 BoundingFrustum 是否与指定的 Plane 相交。
     * @param {Plane} plane 用于相交检查的 Plane。
     * @returns {PlaneIntersectionType} 测试相交结果。
     */
    Intersects(plane: Plane): PlaneIntersectionType;

    /**
     * 检查当前 BoundingFrustum 是否与指定的 Ray 相交。
     * @param {Ray} ray 用于相交检查的 Ray。
     * @returns {Number | null} 如果相交则返回长度，否则为 null。
     */
    Intersects(ray: Ray): Number | null;

    /**
     * 返回呈现当前 BoundingFrustum 的 String。
     * @returns {String} 呈现当前 BoundingFrustum 的 String。
     */
    ToString(): String;
}
