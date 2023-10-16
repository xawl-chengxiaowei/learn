
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

// 给你一个链表,删除链表倒数第N个节点,并且返回链表的头节点
function removeNthFromEnd(head: ListNode | null, n: number) {

  // if (!head) return null

  // let count = 0;
  // let current = head;

  // while (current.next !== null) {
  //   count++;
  //   current = current.next;
  // }
  // let delNodeIndex = count - n;
  // let delNode = head;

  // count = 0
  // while (delNode.next !== null) {
  //   if (count === delNodeIndex) {
  //     // 删除对应的节点.

  //   }
  //   count++
  //   delNode = delNode.next
  // }


  if (!head) return null;

  let slow, fast = head;

  while (n--) {
    if (fast.next) {
      fast = fast.next;
    }
  }
  // 如果fast走到最后一位,则n要删除的节点就是头节点.
  if (!fast.next) return head.next;
  while (fast.next) {
    fast = fast.next;
    slow = slow.next
  }
  slow.next = slow.next.next;
  return head
};


