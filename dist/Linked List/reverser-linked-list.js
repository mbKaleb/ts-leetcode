"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverseList(head) {
    if (head === null) {
        return head;
    }
    let prev = null;
    let current = head;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
//# sourceMappingURL=reverser-linked-list.js.map