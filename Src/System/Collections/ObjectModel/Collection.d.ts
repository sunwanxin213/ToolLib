import Base from "../../../Core/Base.js";

/**
 * 固定类型的集合
 * @class
 */
export default class Collection<T> extends Base {
    [n: number]: T;

    /**
     * 获取该集合中包含的元素数量
     * @readonly
     */
    readonly Count: Number;

    /**
     * 初始化新的 Collection 实例。
     * @param {Function} type 元素类型。
     * @returns {Collection<T>} Collection 实例。
     */
    constructor(type: Function);

    /**
     * 初始化新的 Collection 实例。
     * @param {Function} type 元素类型。
     * @param {Number} count 最大数量。
     * @returns {Collection<T>} Collection 实例。
     */
    constructor(type: Function, count: Number);

    /**
     * 初始化新的 Collection 实例。
     * @param {Function} type 元素类型。
     * @param {Array<Object>} collection 初始化数组。
     * @returns {Collection<T>} Collection 实例。
     */
    constructor(type: Function, collection: Array<Object>);

    /**
     * 初始化新的 Collection 实例。
     * @param {Function} type 元素类型。
     * @param {Array<Object>} collection 初始化数组。
     * @param {Number} count 最大数量。
     * @returns {Collection<T>} Collection 实例。
     */
    constructor(type: Function, collection: Array<Object>, count: Number);

    /**
     * 返回泛型定义的 Collection 类型。
     * @static
     * @param {Function} type 元素类型。
     * @returns {Collection<any>} 泛型定义的 Collection 类型。
     */
    static T(type: Function): Collection<any>;

    /**
     * 获取元素的类型。
     * @returns {Function} 元素的类型。
     */
    GetType(): Function;

    /**
     * 向集合添加一个元素。
     * @param {T | null} item 要添加到集合的元素。
     * @returns {void}
     */
    Add(item: T | null): void;

    /**
     * 向集合添加一组元素。
     * @param {Array<T>} collection 要添加到集合的元素数组。
     * @returns {void}
     */
    AddRange(collection: Array<T>): void;

    /**
     * 向集合插入一个元素。
     * @param {Number} index 要插入的位置。
     * @param {T | null} item 要添加到集合的元素。
     * @returns {void}
     */
    Insert(index: Number, item: T | null): void;

    /**
     * 向集合插入一组元素。
     * @param {Number} index 要插入的位置。
     * @param {Array<T>} collection 要添加到集合的元素数组。
     * @returns {void}
     */
    InsertRange(index: Number, collection: Array<T>): void;

    /**
     * 返回集合的只读引用。
     * @returns {Collection<T>} 集合的只读引用。
     */
    AsReadOnly(): Collection<T>;

    /**
     * 从集合中移除所有元素。
     * @returns {void}
     */
    Clear(): void;

    /**
     * 创建集合的副本。
     * @returns {Collection<T>} 集合的副本。
     */
    Clone(): Collection<T>;

    /**
     * 确定集合中是否包含指定的元素。
     * @param {T} item 元素。
     * @returns {Boolean} 集合中是否包含指定的元素。
     */
    Contains(item: T): Boolean;

    /**
     * 将集合的元素复制到始于提供的数组索引的数组。
     * @param {Array<T>} array 复制自集合的元素目标。数组必须具有基于零的索引。
     * @param {Number} arrayIndex 要开始复制的数组中基于零的索引。
     * @returns {void}
     */
    CopyTo(array: Array<Object>, arrayIndex: Number): void;

    /**
     * 确定集合中元素的索引。
     * @param {T} item 元素。
     * @returns {Number} 集合中元素的索引。
     */
    IndexOf(item: T): Number;

    /**
     * 从集合中移除首次出现的特定元素。
     * @param {T} item 元素。
     * @returns {Boolean} 是否已移除元素。
     */
    Remove(item: T): Boolean;

    /**
     * 移除位于指定索引的元素。
     * @param {Number} index 要删除的基于零的项索引。
     * @returns {void}
     */
    RemoveAt(index: Number): void;
}
