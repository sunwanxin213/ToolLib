import Base from "../Core/Base.js";
import Vector3 from "./Vector3.js";
import Matrix from "./Matrix.js";
import Plane from "./Plane.js";
import Ray from "./Ray.js";
import BoundingBox from "./BoundingBox.js";
import BoundingFrustum from "./BoundingFrustum.js";
import ContainmentType from "./ContainmentType.js";
import PlaneIntersectionType from "./PlaneIntersectionType.js";

/**
 * 定义一个球体。
 * @class
 */
export default class BoundingSphere extends Base {
    /**
     * 球体的中心点。
     */
    Center: Vector3;

    /**
     * 球形半径。
     */
    Radius: Number;

    constructor();

    /**
     * 新建 BoundingSphere 实例。
     * @constructor
     * @param {Vector3} center 创建球形点。
     * @param {Number} radius 球形半径。
     * @returns {BoundingSphere} BoundingSphere 实例。
     */
    constructor(center: Vector3, radius: Number);

    /**
     * 创建可包含一个指定 BoundingBox 的最小 BoundingSphere。
     * @static
     * @param {BoundingBox} box 用于创建 BoundingSphere 的 BoundingBox。
     * @returns {BoundingSphere} BoundingSphere 实例。
     */
    static CreateFromBoundingBox(box: BoundingBox): BoundingSphere;

    /**
     * 创建可包含一个指定 BoundingFrustum 的最小 BoundingSphere。
     * @static
     * @param {BoundingFrustum} frustum 用于创建 BoundingSphere 的 BoundingFrustum。
     * @returns {BoundingSphere} BoundingSphere 实例。
     */
    static CreateFromFrustum(frustum: BoundingFrustum): BoundingSphere;

    /**
     * 创建一个可包含指定的点列表的 BoundingSphere。
     * @static
     * @param {Array<Vector3>} points BoundingSphere 必须包含的点的列表。
     * @returns {BoundingSphere} BoundingSphere 实例。
     */
    static CreateFromPoints(points: Array<Vector3>): BoundingSphere;

    /**
     * 创建包含两个指定 BoundingSphere 实例的 BoundingSphere。
     * @static
     * @param {BoundingSphere} original 要合并的 BoundingSphere。
     * @param {BoundingSphere} additional 要合并的 BoundingSphere。
     * @returns {BoundingSphere} 合并后的 BoundingSphere 实例。
     */
    static CreateMerged(original: BoundingSphere, additional: BoundingSphere): BoundingSphere;

    /**
     * 检查当前 BoundingSphere 中是否包含指定的 BoundingBox。
     * @param {BoundingBox} box 根据当前 BoundingSphere 检查的 BoundingBox。
     * @returns {ContainmentType} 测试包含结果。
     */
    Contains(box: BoundingBox): ContainmentType;

    /**
     * 检查当前 BoundingSphere 中是否包含指定的 BoundingFrustum。
     * @param {BoundingFrustum} frustum 根据当前 BoundingSphere 检查的 BoundingFrustum。
     * @returns {ContainmentType} 测试包含结果。
     */
    Contains(frustum: BoundingFrustum): ContainmentType;

    /**
     * 检查当前 BoundingSphere 中是否包含指定的 BoundingSphere。
     * @param {BoundingSphere} sphere 根据当前 BoundingSphere 检查的 BoundingSphere。
     * @returns {ContainmentType} 测试包含结果。
     */
    Contains(sphere: BoundingSphere): ContainmentType;

    /**
     * 检查当前 BoundingSphere 中是否包含指定的点。
     * @param {Vector3} point 根据当前 BoundingSphere 检查的点。
     * @returns {ContainmentType} 测试包含结果。
     */
    Contains(point: Vector3): ContainmentType;

    /**
     * 确定指定的 BoundingSphere 是否等于当前 BoundingSphere。
     * @param {BoundingSphere} other 用于与当前 BoundingSphere 比较的 BoundingSphere。
     * @returns {Boolean} 是否相等。
     */
    Equals(other: BoundingSphere): Boolean;

    /**
     * 确定指定的 Object 是否等于 BoundingSphere。
     * @param {Object} obj 用于与当前 BoundingSphere 比较的 Object。
     * @returns {Boolean} 是否相等。
     */
    Equals(obj: Object): Boolean;

    /**
     * 检查当前 BoundingSphere 是否与指定的 BoundingBox 相交。
     * @param {BoundingBox} box 要检查与当前 BoundingBox 是否相交的 BoundingSphere。
     * @returns {Boolean} 是否相交。
     */
    Intersects(box: BoundingBox): Boolean;

    /**
     * 检查当前 BoundingSphere 是否与指定的 BoundingFrustum 相交。
     * @param {BoundingFrustum} frustum 检查与当前 BoundingFrustum 之间交集的 BoundingFrustum。
     * @returns {Boolean} 是否相交。
     */
    Intersects(frustum: BoundingFrustum): Boolean;

    /**
     * 检查当前 BoundingSphere 是否与指定的 BoundingSphere 相交。
     * @param {BoundingSphere} sphere 检查与当前 BoundingSphere 之间交集的 BoundingSphere。
     * @returns {Boolean} 是否相交。
     */
    Intersects(sphere: BoundingSphere): Boolean;

    /**
     * 检查当前 BoundingSphere 是否与指定的 Plane 相交。
     * @param {Plane} plane 检索与当前 BoundingSphere 之间交集的 Plane。
     * @returns {PlaneIntersectionType} 测试相交结果。
     */
    Intersects(plane: Plane): PlaneIntersectionType;

    /**
     * 检查当前 BoundingSphere 是否与指定的 Ray 相交。
     * @param {Ray} ray 要检查与当前 Ray 是否相交的 BoundingSphere。
     * @returns {Number | null} 如果相交则返回长度，否则为 null
     */
    Intersects(ray: Ray): Number | null;

    /**
     * 返回呈现当前 BoundingSphere 的 String。
     * @returns {String} 呈现当前 BoundingSphere 的 String。
     */
    ToString(): String;

    /**
     * 使用给定 Matrix 平移和缩放 BoundingSphere。
     * @param {Matrix} matrix 可能包含平移、旋转或统一缩放的变换矩阵。请注意，如果在此变换矩阵中存在非统一缩放、修剪或其他异常变换，BoundingSphere.Transform 将不会返回正确的结果。导致此情况的原因是无法对球体进行修剪或非统一缩放。这种操作可导致球体丢失其形状。
     * @returns {BoundingSphere} 变换后的 BoundingSphere 实例。
     */
    Transform(matrix: Matrix): BoundingSphere;
}
