// https://leetcode.com/problems/merge-two-sorted-lists

export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// I copy both of the list instead of traversing through them, very inefficient.
export default function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let mergedList: ListNode | null = null;
  let current: ListNode | null = null;

  while (list1 || list2) {
    let newNode: ListNode | null = null;
    const val1 = list1 ? list1.val : Infinity;
    const val2 = list2 ? list2.val : Infinity;

    if (val1 === val2) {
      newNode = new ListNode(val1, new ListNode(val2, null));

      if (list1) list1 = list1.next;
      if (list2) list2 = list2.next;
    } else if (val1 < val2) {
      newNode = new ListNode(val1, null);
      if (list1) list1 = list1.next;
    } else {
      newNode = new ListNode(val2, null);
      if (list2) list2 = list2.next;
    }

    if (current === null) {
      current = newNode;
      mergedList = current;
    } else current.next = newNode;

    while (current.next) {
      current = current.next;
    }
  }

  return mergedList;
}
