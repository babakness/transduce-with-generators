"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
function transduce() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return function (iter) {
        var pipedGenerators, pipedGenerators_1, pipedGenerators_1_1, result, e_1_1;
        var e_1, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    pipedGenerators = fns.reduce(function (result, fn) { return fn(result); }, iter);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 8]);
                    pipedGenerators_1 = __values(pipedGenerators), pipedGenerators_1_1 = pipedGenerators_1.next();
                    _b.label = 2;
                case 2:
                    if (!!pipedGenerators_1_1.done) return [3 /*break*/, 5];
                    result = pipedGenerators_1_1.value;
                    return [4 /*yield*/, result];
                case 3:
                    _b.sent();
                    _b.label = 4;
                case 4:
                    pipedGenerators_1_1 = pipedGenerators_1.next();
                    return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 8];
                case 6:
                    e_1_1 = _b.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 8];
                case 7:
                    try {
                        if (pipedGenerators_1_1 && !pipedGenerators_1_1.done && (_a = pipedGenerators_1.return)) _a.call(pipedGenerators_1);
                    }
                    finally { if (e_1) throw e_1.error; }
                    return [7 /*endfinally*/];
                case 8: return [2 /*return*/];
            }
        });
    };
}
exports.transduce = transduce;
function map(fn) {
    return function (inputs) {
        var inputs_1, inputs_1_1, input, e_2_1;
        var e_2, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 7]);
                    inputs_1 = __values(inputs), inputs_1_1 = inputs_1.next();
                    _b.label = 1;
                case 1:
                    if (!!inputs_1_1.done) return [3 /*break*/, 4];
                    input = inputs_1_1.value;
                    return [4 /*yield*/, fn(input)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    inputs_1_1 = inputs_1.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (inputs_1_1 && !inputs_1_1.done && (_a = inputs_1.return)) _a.call(inputs_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
}
exports.map = map;
function mapWithIndex(fn) {
    var index = 0;
    return function (inputs) {
        var inputs_2, inputs_2_1, input, e_3_1;
        var e_3, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 7]);
                    inputs_2 = __values(inputs), inputs_2_1 = inputs_2.next();
                    _b.label = 1;
                case 1:
                    if (!!inputs_2_1.done) return [3 /*break*/, 4];
                    input = inputs_2_1.value;
                    return [4 /*yield*/, fn(input, index++)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    inputs_2_1 = inputs_2.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_3_1 = _b.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (inputs_2_1 && !inputs_2_1.done && (_a = inputs_2.return)) _a.call(inputs_2);
                    }
                    finally { if (e_3) throw e_3.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
}
exports.mapWithIndex = mapWithIndex;
function frame(num, move) {
    if (move === void 0) { move = 1; }
    return function (inputs) {
        var arr, inputs_3, inputs_3_1, input, e_4_1;
        var e_4, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    arr = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 7, 8, 9]);
                    inputs_3 = __values(inputs), inputs_3_1 = inputs_3.next();
                    _b.label = 2;
                case 2:
                    if (!!inputs_3_1.done) return [3 /*break*/, 6];
                    input = inputs_3_1.value;
                    if (!(arr.length < num)) return [3 /*break*/, 3];
                    arr.push(input);
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, arr];
                case 4:
                    _b.sent();
                    arr = __spread(arr.slice(move), [input]);
                    _b.label = 5;
                case 5:
                    inputs_3_1 = inputs_3.next();
                    return [3 /*break*/, 2];
                case 6: return [3 /*break*/, 9];
                case 7:
                    e_4_1 = _b.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 9];
                case 8:
                    try {
                        if (inputs_3_1 && !inputs_3_1.done && (_a = inputs_3.return)) _a.call(inputs_3);
                    }
                    finally { if (e_4) throw e_4.error; }
                    return [7 /*endfinally*/];
                case 9: return [2 /*return*/];
            }
        });
    };
}
exports.frame = frame;
function chunk(num) {
    return function (inputs) { return frame(num, num)(inputs); };
}
exports.chunk = chunk;
function filter(fn) {
    return function (inputs) {
        var inputs_4, inputs_4_1, input, e_5_1;
        var e_5, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 7]);
                    inputs_4 = __values(inputs), inputs_4_1 = inputs_4.next();
                    _b.label = 1;
                case 1:
                    if (!!inputs_4_1.done) return [3 /*break*/, 4];
                    input = inputs_4_1.value;
                    if (!fn(input)) return [3 /*break*/, 3];
                    return [4 /*yield*/, input];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    inputs_4_1 = inputs_4.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_5_1 = _b.sent();
                    e_5 = { error: e_5_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (inputs_4_1 && !inputs_4_1.done && (_a = inputs_4.return)) _a.call(inputs_4);
                    }
                    finally { if (e_5) throw e_5.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
}
exports.filter = filter;
function filterWithIndex(fn) {
    var index = 0;
    return function (inputs) {
        var inputs_5, inputs_5_1, input, e_6_1;
        var e_6, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 7]);
                    inputs_5 = __values(inputs), inputs_5_1 = inputs_5.next();
                    _b.label = 1;
                case 1:
                    if (!!inputs_5_1.done) return [3 /*break*/, 4];
                    input = inputs_5_1.value;
                    if (!fn(input, index++)) return [3 /*break*/, 3];
                    return [4 /*yield*/, input];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3:
                    inputs_5_1 = inputs_5.next();
                    return [3 /*break*/, 1];
                case 4: return [3 /*break*/, 7];
                case 5:
                    e_6_1 = _b.sent();
                    e_6 = { error: e_6_1 };
                    return [3 /*break*/, 7];
                case 6:
                    try {
                        if (inputs_5_1 && !inputs_5_1.done && (_a = inputs_5.return)) _a.call(inputs_5);
                    }
                    finally { if (e_6) throw e_6.error; }
                    return [7 /*endfinally*/];
                case 7: return [2 /*return*/];
            }
        });
    };
}
exports.filterWithIndex = filterWithIndex;
function take(num) {
    // wrapped to work around TS limitations
    return function (a) { return filterWithIndex(function (_, index) { return index < num; })(a); };
}
exports.take = take;
function every(num, offset) {
    if (offset === void 0) { offset = 0; }
    // wrapped to work around TS limitations
    return function (a) { return filterWithIndex(function (_, index) { return (index + offset) % num === 0; })(a); };
}
exports.every = every;
function drop(num) {
    // wrapped to work around TS limitations
    return function (a) { return filterWithIndex(function (_, index) { return index >= num; })(a); };
}
exports.drop = drop;
