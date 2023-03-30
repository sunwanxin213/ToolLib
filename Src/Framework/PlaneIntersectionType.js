import Enum from "../Core/Enum.js";

export default class PlaneIntersectionType extends Enum {
    static #front = new PlaneIntersectionType(0, "Front");

    static #back = new PlaneIntersectionType(1, "Back");

    static #intersecting = new PlaneIntersectionType(2, "Intersecting");

    static get Front() {
        return this.#front;
    }

    static get Back() {
        return this.#back;
    }

    static get Intersecting() {
        return this.#intersecting;
    }
}
