import ListNode from "./linked-node";

class LinkedList {
    #list;
    
    constructor(list: ListNode | null = null) {
        this.#list = list;
    }

    append(value: unknown) {
        const node = new ListNode(value);
        if (!this.#list) {
            this.#list = node;
        } else {
            let list = this.#list;
            while (list.nextNode) {
                list = list.nextNode;
            }
            list.nextNode = node;
        };
    }

    prepend(value: unknown) {
        const node = new ListNode(value);
        node.nextNode = Object.assign({}, this.#list);
        this.#list = node;
    }

    size() {
        if (!this.#list) {
            return 0;
        }
        let num = 1;
        let list = this.#list
        while (list.nextNode) {
            num += 1;
            list = list.nextNode;
        }
        return num;
    }

    head() {
        return this.#list;
    }

    tail() {
        if (!this.#list) {
            return null;
        } 
        let list = this.#list;
        while (list.nextNode) {
            list = list.nextNode;
        }
        return list
    }

    at(index: number) {
        if (!this.#list) {
            return null;
        }
        if (index < 0) {
            return null
        }
        let num = 0;
        let list = this.#list;
        while (num < index) {
            if (list.nextNode) {
                list = list.nextNode;
                num += 1;
            } else {
                return null;
            }
        }
        return list
    }

    pop() {
        let list = this.#list;
        if (!list) {
            return null;
        }
        while (list.nextNode?.nextNode) {
            list = list.nextNode;
        }
        const last = list.nextNode;
        list.nextNode = null;
        return last;
    }

    contains(value: unknown) {
        let list = this.#list;
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

    find(value: unknown) {
        let list = this.#list;
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
        let list = this.#list;
        if (!list) {
            return "null";
        }
        let str = "";
        while (list) {
            const val = `( ${list.value} ) -> `
            str = str.concat(val);
            list = list.nextNode;
        }
        str = str.concat("null");
        return str;
    }

    insertAt(value: unknown, index: number) {
        if (!this.#list) {
            this.append(value);
            return
        }else if (index < 0) {
            this.append(value);
            return;
        } else if (index > this.size()) {
            this.prepend(value);
            return;
        }
        const node = new ListNode(value);
        let num = 0;
        let prev: ListNode | null = null
        let curr = this.#list;
        while (num < index) {
            if (curr.nextNode) {
                prev = curr
                curr = curr.nextNode;
                num += 1;
            } 
        }
        if (prev) {
            prev.nextNode = node;
            node.nextNode = curr;
        }
    }

    removeAt(index: number) {
        if (!this.#list) {
            return;
        } else if (index < 0) {
            const first = Object.assign({}, this.#list);
            first.nextNode = null;
            this.#list = this.#list.nextNode;
            return first;
        } else if (index > this.size()) {
            return this.pop();
        }
        let node: null | ListNode;
        let num = 0;
        let prev: ListNode | null = null
        let curr = this.#list;
        while (num < index) {
            if (curr.nextNode) {
                prev = curr
                curr = curr.nextNode;
                num += 1;
            } 
        }
        if (prev) {
            node = Object.assign({}, curr);
            node.nextNode = null
            prev.nextNode = curr.nextNode;
            return node;
        }
    }
}
