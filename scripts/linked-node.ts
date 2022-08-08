
class ListNode {
    public value: unknown | null;
    public nextNode: ListNode | null; 

    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export default ListNode;
