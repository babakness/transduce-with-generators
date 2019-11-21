"use strict";
/// <reference lib="esnext" />
/// <reference lib="dom" />
/// <reference lib="esnext.asynciterable" />
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
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
        return __asyncGenerator(this, arguments, function () {
            var pipedGenerators, pipedGenerators_1, pipedGenerators_1_1, result, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        pipedGenerators = fns.reduce(function (result, fn) { return fn(result); }, iter);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, 9, 14]);
                        pipedGenerators_1 = __asyncValues(pipedGenerators);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, __await(pipedGenerators_1.next())];
                    case 3:
                        if (!(pipedGenerators_1_1 = _b.sent(), !pipedGenerators_1_1.done)) return [3 /*break*/, 7];
                        result = pipedGenerators_1_1.value;
                        return [4 /*yield*/, __await(result)];
                    case 4: return [4 /*yield*/, _b.sent()];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _b.trys.push([9, , 12, 13]);
                        if (!(pipedGenerators_1_1 && !pipedGenerators_1_1.done && (_a = pipedGenerators_1.return))) return [3 /*break*/, 11];
                        return [4 /*yield*/, __await(_a.call(pipedGenerators_1))];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_1) throw e_1.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
}
exports.transduce = transduce;
function type() {
    return function (a) {
        return a;
    };
}
exports.type = type;
/**
 * Lifts a function into a stream of data, mapping incoming data to new outgoing data
 */
function map(fn) {
    return function (inputs) {
        return __asyncGenerator(this, arguments, function () {
            var inputs_1, inputs_1_1, input, e_2_1;
            var e_2, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, 8, 13]);
                        inputs_1 = __asyncValues(inputs);
                        _b.label = 1;
                    case 1: return [4 /*yield*/, __await(inputs_1.next())];
                    case 2:
                        if (!(inputs_1_1 = _b.sent(), !inputs_1_1.done)) return [3 /*break*/, 6];
                        input = inputs_1_1.value;
                        return [4 /*yield*/, __await(fn(input))];
                    case 3: return [4 /*yield*/, _b.sent()];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [3 /*break*/, 1];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_2_1 = _b.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(inputs_1_1 && !inputs_1_1.done && (_a = inputs_1.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, __await(_a.call(inputs_1))];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_2) throw e_2.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
}
exports.map = map;
/**
 * Similar to `map` only adding a sequentially increment index as the second parameter.
 */
function mapWithIndex(fn) {
    var index = 0;
    return function (inputs) {
        return __asyncGenerator(this, arguments, function () {
            var inputs_2, inputs_2_1, input, e_3_1;
            var e_3, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, 8, 13]);
                        inputs_2 = __asyncValues(inputs);
                        _b.label = 1;
                    case 1: return [4 /*yield*/, __await(inputs_2.next())];
                    case 2:
                        if (!(inputs_2_1 = _b.sent(), !inputs_2_1.done)) return [3 /*break*/, 6];
                        input = inputs_2_1.value;
                        return [4 /*yield*/, __await(fn(input, index++))];
                    case 3: return [4 /*yield*/, _b.sent()];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [3 /*break*/, 1];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_3_1 = _b.sent();
                        e_3 = { error: e_3_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(inputs_2_1 && !inputs_2_1.done && (_a = inputs_2.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, __await(_a.call(inputs_2))];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_3) throw e_3.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
}
exports.mapWithIndex = mapWithIndex;
/**
 * Handy function generates a range of numbers in steps
 */
function range(start, end, step) {
    var check;
    if (step === void 0) { step = 1; }
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (step === 0)
                    return [2 /*return*/];
                if (start === end)
                    return [2 /*return*/];
                if (start < end && step < 0)
                    return [2 /*return*/];
                if (start > end && step > 0)
                    return [2 /*return*/];
                check = true;
                _a.label = 1;
            case 1:
                if (!check) return [3 /*break*/, 3];
                return [4 /*yield*/, start];
            case 2:
                _a.sent();
                start += step;
                check = step > 0 ? start < end : start > end;
                return [3 /*break*/, 1];
            case 3: return [2 /*return*/];
        }
    });
}
exports.range = range;
/**
 * Lifts a predicate into a stream to selectively filter what data passes through
 */
function filter(fn) {
    return function (inputs) {
        return __asyncGenerator(this, arguments, function () {
            var inputs_3, inputs_3_1, input, e_4_1;
            var e_4, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, 8, 13]);
                        inputs_3 = __asyncValues(inputs);
                        _b.label = 1;
                    case 1: return [4 /*yield*/, __await(inputs_3.next())];
                    case 2:
                        if (!(inputs_3_1 = _b.sent(), !inputs_3_1.done)) return [3 /*break*/, 6];
                        input = inputs_3_1.value;
                        if (!fn(input)) return [3 /*break*/, 5];
                        return [4 /*yield*/, __await(input)];
                    case 3: return [4 /*yield*/, _b.sent()];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [3 /*break*/, 1];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_4_1 = _b.sent();
                        e_4 = { error: e_4_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(inputs_3_1 && !inputs_3_1.done && (_a = inputs_3.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, __await(_a.call(inputs_3))];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_4) throw e_4.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
}
exports.filter = filter;
/**
 * Similar to `filter` only it add a sequentially increment index as the second parameter.
 */
function filterWithIndex(fn) {
    var index = 0;
    return function (inputs) {
        return __asyncGenerator(this, arguments, function () {
            var inputs_4, inputs_4_1, input, e_5_1;
            var e_5, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 7, 8, 13]);
                        inputs_4 = __asyncValues(inputs);
                        _b.label = 1;
                    case 1: return [4 /*yield*/, __await(inputs_4.next())];
                    case 2:
                        if (!(inputs_4_1 = _b.sent(), !inputs_4_1.done)) return [3 /*break*/, 6];
                        input = inputs_4_1.value;
                        if (!fn(input, index++)) return [3 /*break*/, 5];
                        return [4 /*yield*/, __await(input)];
                    case 3: return [4 /*yield*/, _b.sent()];
                    case 4:
                        _b.sent();
                        _b.label = 5;
                    case 5: return [3 /*break*/, 1];
                    case 6: return [3 /*break*/, 13];
                    case 7:
                        e_5_1 = _b.sent();
                        e_5 = { error: e_5_1 };
                        return [3 /*break*/, 13];
                    case 8:
                        _b.trys.push([8, , 11, 12]);
                        if (!(inputs_4_1 && !inputs_4_1.done && (_a = inputs_4.return))) return [3 /*break*/, 10];
                        return [4 /*yield*/, __await(_a.call(inputs_4))];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        if (e_5) throw e_5.error;
                        return [7 /*endfinally*/];
                    case 12: return [7 /*endfinally*/];
                    case 13: return [2 /*return*/];
                }
            });
        });
    };
}
exports.filterWithIndex = filterWithIndex;
function frame(num, move) {
    if (move === void 0) { move = 1; }
    return function (inputs) {
        return __asyncGenerator(this, arguments, function () {
            var arr, inputs_5, inputs_5_1, input, e_6_1;
            var e_6, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        arr = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 9, 10, 15]);
                        inputs_5 = __asyncValues(inputs);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, __await(inputs_5.next())];
                    case 3:
                        if (!(inputs_5_1 = _b.sent(), !inputs_5_1.done)) return [3 /*break*/, 8];
                        input = inputs_5_1.value;
                        if (!(arr.length < num)) return [3 /*break*/, 4];
                        arr.push(input);
                        return [3 /*break*/, 7];
                    case 4: return [4 /*yield*/, __await(arr)];
                    case 5: return [4 /*yield*/, _b.sent()];
                    case 6:
                        _b.sent();
                        arr = __spread(arr.slice(move), [input]);
                        _b.label = 7;
                    case 7: return [3 /*break*/, 2];
                    case 8: return [3 /*break*/, 15];
                    case 9:
                        e_6_1 = _b.sent();
                        e_6 = { error: e_6_1 };
                        return [3 /*break*/, 15];
                    case 10:
                        _b.trys.push([10, , 13, 14]);
                        if (!(inputs_5_1 && !inputs_5_1.done && (_a = inputs_5.return))) return [3 /*break*/, 12];
                        return [4 /*yield*/, __await(_a.call(inputs_5))];
                    case 11:
                        _b.sent();
                        _b.label = 12;
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        if (e_6) throw e_6.error;
                        return [7 /*endfinally*/];
                    case 14: return [7 /*endfinally*/];
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
}
exports.frame = frame;
function chunk(num) {
    return function (inputs) {
        return __asyncGenerator(this, arguments, function () {
            var arr, inputs_6, inputs_6_1, input, e_7_1;
            var e_7, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        arr = [];
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, 9, 14]);
                        inputs_6 = __asyncValues(inputs);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, __await(inputs_6.next())];
                    case 3:
                        if (!(inputs_6_1 = _b.sent(), !inputs_6_1.done)) return [3 /*break*/, 7];
                        input = inputs_6_1.value;
                        arr.push(input);
                        if (!(arr.length === num)) return [3 /*break*/, 6];
                        return [4 /*yield*/, __await(arr)];
                    case 4: return [4 /*yield*/, _b.sent()];
                    case 5:
                        _b.sent();
                        arr = [];
                        _b.label = 6;
                    case 6: return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_7_1 = _b.sent();
                        e_7 = { error: e_7_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _b.trys.push([9, , 12, 13]);
                        if (!(inputs_6_1 && !inputs_6_1.done && (_a = inputs_6.return))) return [3 /*break*/, 11];
                        return [4 /*yield*/, __await(_a.call(inputs_6))];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_7) throw e_7.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
}
exports.chunk = chunk;
/**
 * Takes up to a give number of items from a stream then stops listening
 */
function take(num) {
    // wrapped to work around TS limitations
    var count = 0;
    return function (inputs) {
        return __asyncGenerator(this, arguments, function () {
            var inputs_7, inputs_7_1, input, e_8_1;
            var e_8, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 8, 9, 14]);
                        inputs_7 = __asyncValues(inputs);
                        _b.label = 1;
                    case 1: return [4 /*yield*/, __await(inputs_7.next())];
                    case 2:
                        if (!(inputs_7_1 = _b.sent(), !inputs_7_1.done)) return [3 /*break*/, 7];
                        input = inputs_7_1.value;
                        return [4 /*yield*/, __await(input)];
                    case 3: return [4 /*yield*/, _b.sent()];
                    case 4:
                        _b.sent();
                        if (!(count++ >= num)) return [3 /*break*/, 6];
                        return [4 /*yield*/, __await(void 0)];
                    case 5: return [2 /*return*/, _b.sent()];
                    case 6: return [3 /*break*/, 1];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_8_1 = _b.sent();
                        e_8 = { error: e_8_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _b.trys.push([9, , 12, 13]);
                        if (!(inputs_7_1 && !inputs_7_1.done && (_a = inputs_7.return))) return [3 /*break*/, 11];
                        return [4 /*yield*/, __await(_a.call(inputs_7))];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_8) throw e_8.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
}
exports.take = take;
/**
 * Filters so that every `num` values passes through, second parameter is an offset
 */
function every(num, offset) {
    if (offset === void 0) { offset = 0; }
    // wrapped to work around TS limitations
    return function (a) { return filterWithIndex(function (_, index) { return (index + offset) % num === 0; })(a); };
}
exports.every = every;
/**
 * Drops the first `num` number of items from stream
 */
function drop(num) {
    // wrapped to work around TS limitations
    return function (a) { return filterWithIndex(function (_, index) { return index >= num; })(a); };
}
exports.drop = drop;
function _sleep(m) {
    return new Promise(function (resolve, reject) {
        var id = setTimeout(function () {
            clearTimeout(id);
            return resolve();
        }, m);
    });
}
/**
 * An asynchonous function that waits delays outgoing values by given time
 */
function delay(time) {
    return function (a) {
        return __asyncGenerator(this, arguments, function () {
            var a_1, a_1_1, item, e_9_1;
            var e_9, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 8, 9, 14]);
                        a_1 = __asyncValues(a);
                        _b.label = 1;
                    case 1: return [4 /*yield*/, __await(a_1.next())];
                    case 2:
                        if (!(a_1_1 = _b.sent(), !a_1_1.done)) return [3 /*break*/, 7];
                        item = a_1_1.value;
                        return [4 /*yield*/, __await(_sleep(time))];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, __await(item)];
                    case 4: return [4 /*yield*/, _b.sent()];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6: return [3 /*break*/, 1];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_9_1 = _b.sent();
                        e_9 = { error: e_9_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _b.trys.push([9, , 12, 13]);
                        if (!(a_1_1 && !a_1_1.done && (_a = a_1.return))) return [3 /*break*/, 11];
                        return [4 /*yield*/, __await(_a.call(a_1))];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_9) throw e_9.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
}
exports.delay = delay;
/**
 * Throttles the rate of incoming data
 */
function throttle(num) {
    return function (a) {
        return __asyncGenerator(this, arguments, function () {
            var time, a_2, a_2_1, item, e_10_1;
            var e_10, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        time = Date.now();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 8, 9, 14]);
                        a_2 = __asyncValues(a);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, __await(a_2.next())];
                    case 3:
                        if (!(a_2_1 = _b.sent(), !a_2_1.done)) return [3 /*break*/, 7];
                        item = a_2_1.value;
                        if (!(Date.now() - time > num)) return [3 /*break*/, 6];
                        return [4 /*yield*/, __await(item)];
                    case 4: return [4 /*yield*/, _b.sent()];
                    case 5:
                        _b.sent();
                        time = Date.now();
                        _b.label = 6;
                    case 6: return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 14];
                    case 8:
                        e_10_1 = _b.sent();
                        e_10 = { error: e_10_1 };
                        return [3 /*break*/, 14];
                    case 9:
                        _b.trys.push([9, , 12, 13]);
                        if (!(a_2_1 && !a_2_1.done && (_a = a_2.return))) return [3 /*break*/, 11];
                        return [4 /*yield*/, __await(_a.call(a_2))];
                    case 10:
                        _b.sent();
                        _b.label = 11;
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        if (e_10) throw e_10.error;
                        return [7 /*endfinally*/];
                    case 13: return [7 /*endfinally*/];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
}
exports.throttle = throttle;
/**
 * Throttles the rate of incoming data, letting trailing information through
 */
function throttleTrailing(num) {
    return function (a) {
        return __asyncGenerator(this, arguments, function () {
            var time, timeoutId, a_3, a_3_1, item, e_11_1;
            var e_11, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        time = Date.now();
                        timeoutId = 0;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 12, 13, 18]);
                        a_3 = __asyncValues(a);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, __await(a_3.next())];
                    case 3:
                        if (!(a_3_1 = _b.sent(), !a_3_1.done)) return [3 /*break*/, 11];
                        item = a_3_1.value;
                        clearTimeout(timeoutId);
                        if (!(Date.now() - time > num)) return [3 /*break*/, 6];
                        return [4 /*yield*/, __await(item)];
                    case 4: return [4 /*yield*/, _b.sent()];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 9];
                    case 6: return [4 /*yield*/, __await(new Promise(function (resolve, reject) {
                            timeoutId = setTimeout(function () {
                                resolve(item);
                                clearTimeout(timeoutId);
                            }, num);
                        }))];
                    case 7: return [4 /*yield*/, _b.sent()];
                    case 8:
                        _b.sent();
                        _b.label = 9;
                    case 9:
                        time = Date.now();
                        _b.label = 10;
                    case 10: return [3 /*break*/, 2];
                    case 11: return [3 /*break*/, 18];
                    case 12:
                        e_11_1 = _b.sent();
                        e_11 = { error: e_11_1 };
                        return [3 /*break*/, 18];
                    case 13:
                        _b.trys.push([13, , 16, 17]);
                        if (!(a_3_1 && !a_3_1.done && (_a = a_3.return))) return [3 /*break*/, 15];
                        return [4 /*yield*/, __await(_a.call(a_3))];
                    case 14:
                        _b.sent();
                        _b.label = 15;
                    case 15: return [3 /*break*/, 17];
                    case 16:
                        if (e_11) throw e_11.error;
                        return [7 /*endfinally*/];
                    case 17: return [7 /*endfinally*/];
                    case 18: return [2 /*return*/];
                }
            });
        });
    };
}
exports.throttleTrailing = throttleTrailing;
/**
 * Debounces incoming data, ignores information given too frequently
 */
function debounce(num) {
    return function (iterable) {
        return __asyncGenerator(this, arguments, function () {
            var time, iterable_1, iterable_1_1, item, e_12_1;
            var e_12, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        time = -Infinity;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 9, 10, 15]);
                        iterable_1 = __asyncValues(iterable);
                        _b.label = 2;
                    case 2: return [4 /*yield*/, __await(iterable_1.next())];
                    case 3:
                        if (!(iterable_1_1 = _b.sent(), !iterable_1_1.done)) return [3 /*break*/, 8];
                        item = iterable_1_1.value;
                        if (!(Date.now() - time > num)) return [3 /*break*/, 6];
                        return [4 /*yield*/, __await(item)];
                    case 4: return [4 /*yield*/, _b.sent()];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        time = Date.now();
                        _b.label = 7;
                    case 7: return [3 /*break*/, 2];
                    case 8: return [3 /*break*/, 15];
                    case 9:
                        e_12_1 = _b.sent();
                        e_12 = { error: e_12_1 };
                        return [3 /*break*/, 15];
                    case 10:
                        _b.trys.push([10, , 13, 14]);
                        if (!(iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return))) return [3 /*break*/, 12];
                        return [4 /*yield*/, __await(_a.call(iterable_1))];
                    case 11:
                        _b.sent();
                        _b.label = 12;
                    case 12: return [3 /*break*/, 14];
                    case 13:
                        if (e_12) throw e_12.error;
                        return [7 /*endfinally*/];
                    case 14: return [7 /*endfinally*/];
                    case 15: return [2 /*return*/];
                }
            });
        });
    };
}
exports.debounce = debounce;
/**
 * Debounces incoming data, ignores information given too frequently
 * with a trailing response after the last incoming piece of information
 */
function debounceTrailing(num) {
    return function (iterable) {
        return __asyncGenerator(this, arguments, function () {
            var resolve, prom, timeoutId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resolve = function (x) { };
                        prom = new Promise(function (r) { return resolve = r; });
                        timeoutId = 0;
                        subscribe(function (item) {
                            clearTimeout(timeoutId);
                            timeoutId = setTimeout(function () {
                                resolve(item);
                                prom = new Promise(function (r) { return resolve = r; });
                            }, num);
                        }, iterable);
                        _a.label = 1;
                    case 1:
                        if (!true) return [3 /*break*/, 5];
                        return [4 /*yield*/, __await(prom)];
                    case 2: return [4 /*yield*/, __await.apply(void 0, [_a.sent()])];
                    case 3: return [4 /*yield*/, _a.sent()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
}
exports.debounceTrailing = debounceTrailing;
/**
 * Subscribes to a income stream, with error catching function.
 * Returns function which cancels subscription
 */
function subscribeWithCatch(fn, errFn, iterable) {
    var _this = this;
    var cancel = false;
    var action = function () { return __awaiter(_this, void 0, void 0, function () {
        var iterable_2, iterable_2_1, item, e_13_1, e_14, error;
        var e_13, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 13, , 14]);
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 6, 7, 12]);
                    iterable_2 = __asyncValues(iterable);
                    _b.label = 2;
                case 2: return [4 /*yield*/, iterable_2.next()];
                case 3:
                    if (!(iterable_2_1 = _b.sent(), !iterable_2_1.done)) return [3 /*break*/, 5];
                    item = iterable_2_1.value;
                    if (cancel) {
                        return [3 /*break*/, 5];
                    }
                    else {
                        fn(item);
                    }
                    _b.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_13_1 = _b.sent();
                    e_13 = { error: e_13_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _b.trys.push([7, , 10, 11]);
                    if (!(iterable_2_1 && !iterable_2_1.done && (_a = iterable_2.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _a.call(iterable_2)];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_13) throw e_13.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12: return [3 /*break*/, 14];
                case 13:
                    e_14 = _b.sent();
                    error = e_14;
                    errFn(error);
                    return [3 /*break*/, 14];
                case 14: return [2 /*return*/];
            }
        });
    }); };
    action();
    return function () { return cancel = true; };
}
exports.subscribeWithCatch = subscribeWithCatch;
/**
 * Subscribes to a income stream, return function cancels subscription
 */
function subscribe(fn, iterable) {
    return subscribeWithCatch(fn, function (err) { throw err; }, iterable);
}
exports.subscribe = subscribe;
function fromDomEvenHelper(listenable, event) {
    var promise = new Promise(function (resolve) {
        var handler = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            listenable.removeEventListener(event, handler);
            resolve.apply(void 0, __spread(args));
            handler = undefined;
            promise = undefined;
        };
        listenable.addEventListener(event, handler);
    });
    return promise;
}
/**
 * Turns dom events on an element into a stream
 */
function fromDomEvent(event, element) {
    return __asyncGenerator(this, arguments, function fromDomEvent_1() {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 4];
                    return [4 /*yield*/, __await(fromDomEvenHelper(element, event))];
                case 1: return [4 /*yield*/, __await.apply(void 0, [_a.sent()])];
                case 2: return [4 /*yield*/, _a.sent()];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.fromDomEvent = fromDomEvent;
