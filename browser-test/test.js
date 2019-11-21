"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const T = __importStar(require("../es5/index"));
let button = document.getElementById('button');
let foo = T.transduce(T.map((x) => x + 2), T.map(x => x + 2));
for (let i of foo([1, 2, 3])) {
    console.log(i);
}
