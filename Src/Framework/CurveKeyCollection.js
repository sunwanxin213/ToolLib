import MethodOverload from "../Core/MethodOverload.js";
import Collection from "../System/Collections/ObjectModel/Collection.js";
import CurveKey from "./CurveKey.js";

export default class CurveKeyCollection extends Collection {
    constructor() {
        super(CurveKey);
    }

    Clone(...params) {
        CurveKeyCollection.prototype.Clone = MethodOverload()
            .Add([], function () {
                let newCurveKeyCollection = new CurveKeyCollection();
                for (let i = 0; i < this.Count; i++) {
                    newCurveKeyCollection.Add(this[i]);
                }
                return newCurveKeyCollection;
            });

        return CurveKeyCollection.prototype.Clone.call(this, ...params);
    };
}
