"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _LinkedList_list;
Object.defineProperty(exports, "__esModule", { value: true });
const linked_node_1 = __importDefault(require("./linked-node"));
class LinkedList {
    constructor(list = null) {
        _LinkedList_list.set(this, void 0);
        __classPrivateFieldSet(this, _LinkedList_list, list, "f");
    }
    append(value) {
        const node = new linked_node_1.default(value);
        if (!__classPrivateFieldGet(this, _LinkedList_list, "f")) {
            __classPrivateFieldSet(this, _LinkedList_list, node, "f");
        }
        else {
            let list = __classPrivateFieldGet(this, _LinkedList_list, "f");
            while (list.nextNode) {
                list = list.nextNode;
            }
            list.nextNode = node;
        }
        ;
    }
    prepend(value) {
        const node = new linked_node_1.default(value);
        node.nextNode = Object.assign({}, __classPrivateFieldGet(this, _LinkedList_list, "f"));
        __classPrivateFieldSet(this, _LinkedList_list, node, "f");
    }
    size() {
        if (!__classPrivateFieldGet(this, _LinkedList_list, "f")) {
            return 0;
        }
        let num = 1;
        let list = __classPrivateFieldGet(this, _LinkedList_list, "f");
        while (list.nextNode) {
            num += 1;
            list = list.nextNode;
        }
        return num;
    }
    head() {
        return __classPrivateFieldGet(this, _LinkedList_list, "f");
    }
    tail() {
        if (!__classPrivateFieldGet(this, _LinkedList_list, "f")) {
            return null;
        }
        let list = __classPrivateFieldGet(this, _LinkedList_list, "f");
        while (list.nextNode) {
            list = list.nextNode;
        }
        return list;
    }
    at(index) {
        if (!__classPrivateFieldGet(this, _LinkedList_list, "f")) {
            return null;
        }
        if (index < 0) {
            return null;
        }
        let num = 0;
        let list = __classPrivateFieldGet(this, _LinkedList_list, "f");
        while (num < index) {
            if (list.nextNode) {
                list = list.nextNode;
                num += 1;
            }
            else {
                return null;
            }
        }
        return list;
    }
    pop() {
        var _a;
        let list = __classPrivateFieldGet(this, _LinkedList_list, "f");
        if (!list) {
            return null;
        }
        while ((_a = list.nextNode) === null || _a === void 0 ? void 0 : _a.nextNode) {
            list = list.nextNode;
        }
        const last = list.nextNode;
        list.nextNode = null;
        return last;
    }
    contains(value) {
        let list = __classPrivateFieldGet(this, _LinkedList_list, "f");
        if (!list) {
            return false;
        }
        while (list) {
            if (list.value === value) {
                return true;
            }
            list = list.nextNode;
        }
        return false;
    }
    find(value) {
        let list = __classPrivateFieldGet(this, _LinkedList_list, "f");
        if (!list) {
            return "nil";
        }
        while (list) {
            if (list.value === value) {
                return list;
            }
            list = list.nextNode;
        }
        return "nill";
    }
    toString() {
        let list = __classPrivateFieldGet(this, _LinkedList_list, "f");
        if (!list) {
            return "null";
        }
        let str = "";
        while (list) {
            const val = `( ${list.value} ) -> `;
            str = str.concat(val);
            list = list.nextNode;
        }
        str = str.concat("null");
        return str;
    }
    insertAt(value, index) {
        if (!__classPrivateFieldGet(this, _LinkedList_list, "f")) {
            this.append(value);
            return;
        }
        else if (index < 0) {
            this.append(value);
            return;
        }
        else if (index > this.size()) {
            this.prepend(value);
            return;
        }
        const node = new linked_node_1.default(value);
        let num = 0;
        let prev = null;
        let curr = __classPrivateFieldGet(this, _LinkedList_list, "f");
        while (num < index) {
            if (curr.nextNode) {
                prev = curr;
                curr = curr.nextNode;
                num += 1;
            }
        }
        if (prev) {
            prev.nextNode = node;
            node.nextNode = curr;
        }
    }
    removeAt(index) {
        if (!__classPrivateFieldGet(this, _LinkedList_list, "f")) {
            return;
        }
        else if (index < 0) {
            const first = Object.assign({}, __classPrivateFieldGet(this, _LinkedList_list, "f"));
            first.nextNode = null;
            __classPrivateFieldSet(this, _LinkedList_list, __classPrivateFieldGet(this, _LinkedList_list, "f").nextNode, "f");
            return first;
        }
        else if (index > this.size()) {
            return this.pop();
        }
        let node;
        let num = 0;
        let prev = null;
        let curr = __classPrivateFieldGet(this, _LinkedList_list, "f");
        while (num < index) {
            if (curr.nextNode) {
                prev = curr;
                curr = curr.nextNode;
                num += 1;
            }
        }
        if (prev) {
            node = Object.assign({}, curr);
            node.nextNode = null;
            prev.nextNode = curr.nextNode;
            return node;
        }
    }
}
_LinkedList_list = new WeakMap();
//# sourceMappingURL=linked-list.js.map