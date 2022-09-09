console.log('connected');

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

let TL1 = new ListNode(1, new ListNode(2, new ListNode(4)))
let TL2 = new ListNode(3, new ListNode(3))
console.log(TL1)
console.log(TL2)







mergeTwoLists(TL1, TL2)

