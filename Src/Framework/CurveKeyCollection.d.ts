import Collection from "../System/Collections/ObjectModel/Collection.js";
import CurveKey from "./CurveKey.js";

/**
 * 包含组成 Curve 的 CurveKeys。
 * @class
 */
export default class CurveKeyCollection extends Collection<CurveKey> {
    /**
     * 获取 CurveKeyCollection 中包含的元素数量。
     * @readonly
     */
    readonly Count: Number;

    /**
     * 初始化新的 CurveKeyCollection 实例。
     * @returns {CurveKeyCollection} CurveKeyCollection 实例。
     */
    constructor();

    /**
     * 向 CurveKeyCollection 添加一个 CurveKey。
     * @param {Object | null} item 要添加的 CurveKey。
     * @returns {void}
     */
    Add(item: Object | null): void;

    /**
     * 从 CurveKeyCollection 中移除所有 CurveKeys。
     * @returns {void}
     */
    Clear(): void;

    /**
     * 创建 CurveKeyCollection 的副本。
     * @returns {Collection} CurveKeyCollection 的副本。
     */
    Clone(): CurveKeyCollection;

    /**
     * 确定 CurveKeyCollection 中是否包含指定的 CurveKey。
     * @param {Object} item true 表示 CurveKey 已在 CurveKeyCollection 中找到；false 为未找到。
     * @returns {Boolean} CurveKeyCollection 中是否包含指定的 CurveKey。
     */
    Contains(item: Object): Boolean;

    /**
     * 将 CurveKeyCollection 的 CurveKeys 复制到始于提供的数组索引的数组。
     * @param {Array<Object>} array 复制自 CurveKeyCollection 的 CurveKeys 目标。数组必须具有基于零的索引。
     * @param {Number} arrayIndex 要开始复制的数组中基于零的索引。
     * @returns {void}
     */
    CopyTo(array: Array<Object>, arrayIndex: Number): void;

    /**
     * 确定 CurveKeyCollection 中 CurveKey 的索引。
     * @param {Object} item 要在 CurveKeyCollection 中查找的 CurveKey。
     * @returns {Number} CurveKeyCollection 中 CurveKey 的索引。
     */
    IndexOf(item: Object): Number;

    /**
     * 从 CurveKeyCollection 中移除首次出现的特定 CurveKey。
     * @param {Object} item 要从 CurveKeyCollection 中删除的 CurveKey。
     * @returns {Boolean} 是否已移除特定 CurveKey。
     */
    Remove(item: Object): Boolean;

    /**
     * 移除位于指定索引的 CurveKey。
     * @param {Number} index 要删除的基于零的项索引。
     * @returns {void}
     */
    RemoveAt(index: Number): void;
}
