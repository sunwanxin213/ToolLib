import Enum from "../Core/Enum.js";

/**
 * 介绍平面和边界体间的交集。
 * @enum
 */
export default class PlaneIntersectionType extends Enum {
    /**
     * 无交集，边界体位于 Plane 的正半空间。
     * @static
     * @readonly
     */
    static readonly Front: PlaneIntersectionType;

    /**
     * 无交集，边界体位于 Plane 的负半空间。
     * @static
     * @readonly
     */
    static readonly Back: PlaneIntersectionType;

    /**
     * 与 Plane 相交。
     * @static
     * @readonly
     */
    static readonly Intersecting: PlaneIntersectionType;
}
