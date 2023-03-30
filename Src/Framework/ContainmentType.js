import Enum from "../Core/Enum.js";

export default class ContainmentType extends Enum {
    static #disjoint = new ContainmentType(0, "Disjoint");

    static #contains = new ContainmentType(1, "Contains");

    static #intersects = new ContainmentType(2, "Intersects");

    static get Disjoint() {
        return this.#disjoint;
    }

    static get Contains() {
        return this.#contains;
    }

    static get Intersects() {
        return this.#intersects;
    }
}
