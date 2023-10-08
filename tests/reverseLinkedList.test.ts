import reverseList, { ListNode } from "../src/reverseLinkedList";

describe("reverseListV1", () => {
  it("should return null if the input list is null", () => {
    expect(reverseList(null)).toBe(null);
  });

  it("should reverse a linked list", () => {
    const list = new ListNode(1, new ListNode(2, new ListNode(3, null)));
    const reversedList = reverseList(list);
    expect(reversedList?.val).toBe(3);
    expect(reversedList?.next?.val).toBe(2);
    expect(reversedList?.next?.next?.val).toBe(1);
    expect(reversedList?.next?.next?.next).toBe(null);
  });
});
