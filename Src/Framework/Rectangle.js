import MethodOverload from "../Core/MethodOverload.js";
import Base from "../Core/Base.js";
import Point from "./Point.js";

export default class Rectangle extends Base {
    static get Empty() {
        return new Rectangle(0, 0, 0, 0);
    }

    #x = 0;

    #y = 0;

    #width = 0;

    #height = 0;

    get IsEmpty() {
        return 0 === this.X &&
            0 === this.Y &&
            0 === this.Width &&
            0 === this.Height;
    }

    get Bottom() {
        return this.Y + this.Height;
    }

    get Center() {
        return new Point(this.X + this.Width / 2, this.Y + this.Height / 2);
    }

    get Left() {
        return this.X;
    }

    get Right() {
        return this.X + this.Width;
    }

    get Top() {
        return this.Y;
    }

    static #_constructor = function (...params) {
        Rectangle.#_constructor = MethodOverload()
            .Add([], function () {
                return Rectangle.#_constructor.call(this, 0, 0, 0, 0);
            })
            .Add([Number, Number, Number, Number], function (x, y, width, height) {
                [this.X, this.Y, this.Width, this.Height] = [x, y, width, height];
            });

        return Rectangle.#_constructor.call(this, ...params);
    };

    constructor(...params) {
        super();

        Base.DefineProperties(this, {
            X: {
                get() {
                    return this.#x;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#x = value | 0;
                    })
            },
            Y: {
                get() {
                    return this.#y;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#y = value | 0;
                    })
            },
            Width: {
                get() {
                    return this.#width;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#width = value | 0;
                    })
            },
            Height: {
                get() {
                    return this.#height;
                },
                set: MethodOverload()
                    .Add([Number], function (value) {
                        this.#height = value | 0;
                    })
            },
            Location: {
                get() {
                    return new Point(this.X, this.Y);
                },
                set: MethodOverload()
                    .Add([Point], function (value) {
                        [this.X, this.Y] = [value.X, value.Y];
                    })
            }
        });

        return Rectangle.#_constructor.call(this, ...params);
    }

    [Symbol.iterator] = function* () {
        yield this.X;
        yield this.Y;
        yield this.Width;
        yield this.Height;
    };

    static Intersect(...params) {
        Rectangle.Intersect = MethodOverload()
            .Add([Rectangle, Rectangle], function (value1, value2) {
                if (value1.Intersects(value2)) {
                    let right_side = Math.min(value1.X + value1.Width, value2.X + value2.Width);
                    let left_side = Math.max(value1.X, value2.X);
                    let top_side = Math.max(value1.Y, value2.Y);
                    let bottom_side = Math.min(value1.Y + value1.Height, value2.Y + value2.Height);
                    return new Rectangle(left_side, top_side, right_side - left_side, bottom_side - top_side);
                }

                return Rectangle.Empty;
            });

        return Rectangle.Intersect.call(this, ...params);
    };

    static Union(...params) {
        Rectangle.Union = MethodOverload()
            .Add([Rectangle, Rectangle], function (value1, value2) {
                let x = Math.min(value1.X, value2.X);
                let y = Math.min(value1.Y, value2.Y);
                return new Rectangle(x, y,
                    Math.max(value1.Right, value2.Right) - x,
                    Math.max(value1.Bottom, value2.Bottom) - y);
            });

        return Rectangle.Union.call(this, ...params);
    };

    Contains(...params) {
        Rectangle.prototype.Contains = MethodOverload()
            .Add([Number, Number], function (x, y) {
                return ((((this.X <= x) && (x < (this.X + this.Width))) && (this.Y <= y)) && (y < (this.Y + this.Height)));
            })
            .Add([Point], function (value) {
                return ((((this.X <= value.X) && (value.X < (this.X + this.Width))) && (this.Y <= value.Y)) && (value.Y < (this.Y + this.Height)));
            })
            .Add([Rectangle], function (value) {
                return ((((this.X <= value.X) && ((value.X + value.Width) <= (this.X + this.Width))) && (this.Y <= value.Y)) && ((value.Y + value.Height) <= (this.Y + this.Height)));
            });

        return Rectangle.prototype.Contains.call(this, ...params);
    };

    Equals(...params) {
        Rectangle.prototype.Equals = MethodOverload()
            .Add([Rectangle], function (other) {
                return (this.X === other.X) &&
                    (this.Y === other.Y) &&
                    (this.Width === other.Width) &&
                    (this.Height === other.Height);
            })
            .Add([Object], function (obj) {
                return false;
            });

        return Rectangle.prototype.Equals.call(this, ...params);
    };

    Inflate(...params) {
        Rectangle.prototype.Inflate = MethodOverload()
            .Add([Number, Number], function (horizontalAmount, verticalAmount) {
                this.X -= horizontalAmount;
                this.Y -= verticalAmount;
                this.Width += horizontalAmount * 2;
                this.Height += verticalAmount * 2;
            });

        return Rectangle.prototype.Inflate.call(this, ...params);
    };

    Intersects(...params) {
        Rectangle.prototype.Intersects = MethodOverload()
            .Add([Rectangle], function (value) {
                return value.Left < this.Right &&
                    this.Left < value.Right &&
                    value.Top < this.Bottom &&
                    this.Top < value.Bottom;
            });

        return Rectangle.prototype.Intersects.call(this, ...params);
    };

    Offset(...params) {
        Rectangle.prototype.Offset = MethodOverload()
            .Add([Number, Number], function (offsetX, offsetY) {
                this.X += offsetX;
                this.Y += offsetY;
            })
            .Add([Point], function (amount) {
                this.X += amount.X;
                this.Y += amount.Y;
            });

        return Rectangle.prototype.Offset.call(this, ...params);
    };

    ToString(...params) {
        Rectangle.prototype.ToString = MethodOverload()
            .Add([], function () {
                return `{X:${this.X} Y:${this.Y} Width:${this.Width} Height:${this.Height}}`;
            });

        return Rectangle.prototype.ToString.call(this, ...params);
    };
}
