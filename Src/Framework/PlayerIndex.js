import Enum from "../Core/Enum.js";

export default class PlayerIndex extends Enum {
    static #one = new PlayerIndex(0, "One");

    static #two = new PlayerIndex(1, "Two");

    static #three = new PlayerIndex(2, "Three");

    static #four = new PlayerIndex(3, "Four");

    static #five = new PlayerIndex(4, "Five");

    static #six = new PlayerIndex(5, "Six");

    static #seven = new PlayerIndex(6, "Seven");

    static #eight = new PlayerIndex(7, "Eight");

    static get One() {
        return this.#one;
    }

    static get Two() {
        return this.#two;
    }

    static get Three() {
        return this.#three;
    }

    static get Four() {
        return this.#four;
    }

    static get Five() {
        return this.#five;
    }

    static get Six() {
        return this.#six;
    }

    static get Seven() {
        return this.#seven;
    }

    static get Eight() {
        return this.#eight;
    }
}
