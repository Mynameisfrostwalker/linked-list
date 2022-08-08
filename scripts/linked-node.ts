
class ListNode {
    public value;
    public nextNode; 

    constructor(value: unknown | null = null, nextNode: ListNode | null = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export default ListNode;
