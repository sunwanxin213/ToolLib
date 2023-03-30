import Base from "../Core/Base.js";
import Vector3 from "./Vector3.js";
import Plane from "./Plane.js";
import Ray from "./Ray.js";
import BoundingSphere from "./BoundingSphere.js";
import BoundingFrustum from "./BoundingFrustum.js";
import ContainmentType from "./ContainmentType.js";
import PlaneIntersectionType from "./PlaneIntersectionType.js";

/**
 * 定义通过轴对齐的盒形 3D 物体。
 * @class
 */
export default class BoundingBox extends Base {
    /**
     * 指定 BoundingBox 中的角点总数 (8)。
     * @static
     * @readonly
     */
    static readonly CornerCount: Number;

    /**
     * BoundingBox 包含的最多点。
     * @type {Vector3}
     */
    Max: Vector3;

    /**
     * BoundingBox 包含的最少点。
     * @type {Vector3}
     */
    Min: Vector3;

    constructor();

    /**
     * 创建 BoundingBox 的实例。
     * @constructor
     * @param {Vector3} min BoundingBox 包含的最少点。
     * @param {Vector3} max BoundingBox 包含的最多点。
     * @returns {BoundingBox} BoundingBox 的实例。
     */
    constructor(min: Vector3, max: Vector3);

    /**
     * 创建包含一个点组的最小 BoundingBox。
     * @static
     * @param {Array<Vector3>} points BoundingBox 应包含的点的列表。
     * @returns {BoundingBox} BoundingBox 的实例。
     */
    static CreateFromPoints(points: Array<Vector3>): BoundingBox;

    /**
     * 创建包含指定 BoundingSphere 的最小 BoundingBox。
     * @static
     * @param {BoundingSphere} sphere 要包含的 BoundingSphere。
     * @returns {BoundingBox} BoundingBox 的实例。
     */
    static CreateFromSphere(sphere: BoundingSphere): BoundingBox;

    /**
     * 创建包含两个指定 BoundingBox 实例的最小 BoundingBox。
     * @static
     * @param {BoundingBox} original 要包含的一个 BoundingBox。
     * @param {BoundingBox} additional 要包含的一个 BoundingBox。
     * @returns {BoundingBox} BoundingBox 的实例。
     */
    static CreateMerged(original: BoundingBox, additional: BoundingBox): BoundingBox;

    /**
     * 测试 BoundingBox 中是否包含其他 BoundingBox。
     * @param {BoundingBox} box 用于重叠测试的 BoundingBox。
     * @returns {ContainmentType} 测试包含的结果。
     */
    Contains(box: BoundingBox): ContainmentType;

    /**
     * 测试 BoundingBox 中是否包含 BoundingFrustum。
     * @param {BoundingFrustum} frustum 用于重叠测试的 BoundingFrustum。
     * @returns {ContainmentType} 测试包含的结果。
     */
    Contains(frustum: BoundingFrustum): ContainmentType;

    /**
     * 测试 BoundingBox 中是否包含 BoundingSphere。
     * @param {BoundingSphere} sphere 用于重叠测试的 BoundingSphere。
     * @returns {ContainmentType} 测试包含的结果。
     */
    Contains(sphere: BoundingSphere): ContainmentType;

    /**
     * 测试 BoundingBox 中是否包含点。
     * @param {Vector3} point 用于重叠测试的点。
     * @returns {ContainmentType} 测试包含的结果。
     */
    Contains(point: Vector3): ContainmentType;

    /**
     * 确定 BoundingBox 的两个实例是否相等。
     * @param {BoundingBox} other 用于与当前 BoundingBox 比较的 BoundingBox。
     * @returns {Boolean} 是否相等。
     */
    Equals(other: BoundingBox): Boolean;

    /**
     * 确定 BoundingBox 的两个实例是否相等。
     * @param {Object} obj 用于与当前 BoundingBox 比较的 Object。
     * @returns {Boolean} 是否相等。
     */
    Equals(obj: Object): Boolean;

    /**
     * 获取组成 BoundingBox 角点的数据点数组。
     * @returns {Array<Vector3>} 数据点数组。
     */
    GetCorners(): Array<Vector3>;

    /**
     * 获取组成 BoundingBox 角点的数据点数组。
     * @param {Array<Vector3>} corners 至少具备 8 个 Vector3 数据点的现有数组，此数组可以用来写入 BoundingBox 角点。
     * @returns {void}
     */
    GetCorners(corners: Array<Vector3>): void;

    /**
     * 检查当前 BoundingBox 是否与其他 BoundingBox 相交。
     * @param {BoundingBox} box 用于相交检查的 BoundingBox。
     * @returns {Boolean} 是否相交。
     */
    Intersects(box: BoundingBox): Boolean;

    /**
     * 检查当前 BoundingBox 是否与某个 BoundingFrustum 相交。
     * @param {BoundingFrustum} frustum 用于相交检查的 BoundingFrustum。
     * @returns {Boolean} 是否相交。
     */
    Intersects(frustum: BoundingFrustum): Boolean;

    /**
     * 检查当前 BoundingBox 是否与某个 BoundingSphere 相交。
     * @param {BoundingSphere} sphere 用于相交检查的 BoundingSphere。
     * @returns {Boolean} 是否相交。
     */
    Intersects(sphere: BoundingSphere): Boolean;

    /**
     * 检查当前 BoundingBox 是否与某个 Plane 相交。
     * @param {Plane} plane 用于相交检查的 Plane。
     * @returns {PlaneIntersectionType} 测试相交结果。
     */
    Intersects(plane: Plane): PlaneIntersectionType;

    /**
     * 检查当前 BoundingBox 是否与某个 Ray 相交。
     * @param {Ray} ray 用于相交检查的 Ray。
     * @returns {Number | null} 如果相交则返回长度，否则为 null。
     */
    Intersects(ray: Ray): Number | null;

    /**
     * 返回呈现当前 BoundingBox 的 String。
     * @returns {String} 呈现当前 BoundingBox 的 String。
     */
    ToString(): String;
}
