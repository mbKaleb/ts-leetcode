"use strict";
function mergeTwoLists(list1, list2) {
    let dummy = new ListNode();
    let tail = dummy;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1;
            list1 = list1.next;
        }
        else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next; //This line does not modify dummy
    }
    if (list1) {
        tail.next = list1;
    }
    if (list2) {
        tail.next = list2;
    }
    return dummy.next;
}
//# sourceMappingURL=merge-two-sorted-lists.js.map