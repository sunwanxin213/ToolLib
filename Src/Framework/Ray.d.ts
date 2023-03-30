import Base from "../Core/Base.js";
import Vector3 from "./Vector3.js";
import Plane from "./Plane.js";
import BoundingBox from "./BoundingBox.js";
import BoundingFrustum from "./BoundingFrustum.js";
import BoundingSphere from "./BoundingSphere.js";

/**
 * 定义一条射线。
 * @class
 */
export default class Ray extends Base {
    /**
     * 指定 Ray 所指方向的单位矢量。
     */
    Direction: Vector3;

    /**
     * 指定 Ray 的起点。
     */
    Position: Vector3;

    constructor();

    /**
     * 新建 Ray 实例。
     * @constructor
     * @param {Vector3} position Ray 的起始点。
     * @param {Vector3} direction 描述 Ray 方向的单位矢量。
     * @returns {Ray} Ray 实例。
     */
    constructor(position: Vector3, direction: Vector3);

    /**
     * 确定指定的 Ray 是否等于当前 Ray。
     * @param {Ray} other 用于与当前 Ray 比较的 Ray。
     * @returns {Boolean} 是否相等。
     */
    Equals(other: Ray): Boolean;

    /**
     * 确定 Ray 的两个实例是否相等。
     * @param {Object} obj 用于与当前 Ray 比较的 Object。
     * @returns {Boolean} 是否相等。
     */
    Equals(obj: Object): Boolean;

    /**
     * 检查 Ray 是否与指定的 BoundingBox 相交。
     * @param {BoundingBox} box 要检查与 Ray 是否相交的 BoundingBox。
     * @returns {Number | null} 如果相交则返回长度，否则为 null。
     */
    Intersects(box: BoundingBox): Number | null;

    /**
     * 检查 Ray 是否与指定的 BoundingFrustum 相交。
     * @param {BoundingFrustum} frustum 检查与 Ray 之间交集的 BoundingFrustum。
     * @returns {Number | null} 如果相交则返回长度，否则为 null。
     */
    Intersects(frustum: BoundingFrustum): Number | null;

    /**
     * 检查 Ray 是否与指定的 BoundingSphere 相交。
     * @param {BoundingSphere} sphere 检查与 Ray 的相交性的 BoundingSphere。
     * @returns {Number | null} 如果相交则返回长度，否则为 null。
     */
    Intersects(sphere: BoundingSphere): Number | null;

    /**
     * 确定该 Ray 是否与指定的 Plane 相交。
     * @param {Plane} plane 用于计算与该 Ray 交集的 Plane。
     * @returns {Number | null} 如果相交则返回长度，否则为 null。
     */
    Intersects(plane: Plane): Number | null;

    /**
     * 返回呈现当前 Ray 的 String。
     * @returns {String} 呈现当前 Ray 的 String。
     */
    ToString(): String;
}
