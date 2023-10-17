import mergeTwoLists, { ListNode } from "../src/mergeTwoLists";

describe("mergeTwoLists", () => {
  it("should return null if both lists are null", () => {
    expect(mergeTwoLists(null, null)).toBeNull();
  });

  it("should return the non-null list if one of the lists is null", () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(3, null)));
    expect(mergeTwoLists(list1, null)).toEqual(list1);
    expect(mergeTwoLists(null, list1)).toEqual(list1);
  });

  it("should merge two sorted lists", () => {
    const list1 = new ListNode(1, new ListNode(3, new ListNode(5, null)));
    const list2 = new ListNode(2, new ListNode(4, new ListNode(6, null)));
    const expected = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, null))))
      )
    );
    expect(mergeTwoLists(list1, list2)).toEqual(expected);
  });

  it("should handle lists with duplicate values", () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(2, null)));
    const list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));
    const expected = new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(2, new ListNode(2, new ListNode(3, new ListNode(4, null))))
      )
    );
    expect(mergeTwoLists(list1, list2)).toEqual(expected);
  });
});
