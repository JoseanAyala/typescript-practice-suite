// https://leetcode.com/problems/reverse-linked-list/submissions/
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// V2 Using constructor
export default function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;

  while (head) {
    prev = new ListNode(head.val, prev);
    head = head.next;
  }

  return prev;
}

// V1
function reverseListV1(head: ListNode | null): ListNode | null {
  if (head === null) return head;

  let prev: ListNode | null = null;
  let current = head;

  let next = current.next;
  while (next !== null) {
    current.next = prev;
    prev = current;

    current = next;
    next = current.next;
  }
  current.next = prev;

  return current;
}
