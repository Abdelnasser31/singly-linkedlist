        // Singly linked list

        let linkedList = {
            head: null,
            tail: null
        }

        //function to add a node to a linked list
        function add(node, ll) {
            if (ll.head === null) {
                ll.head = node;
                ll.tail = node;
            } else {
                ll.tail.next = node;
                ll.tail = node;
            }
        }
        // this functio show the linked list
        function showLinkedList(ll) {
            let current;
            if (ll.head === null) {
                console.log("linked list is empty");

            } else {
                current = ll.head;
                while (current !== null) {
                    console.log(current.content);
                    current = current.next;
                }
            }
        }

        // functio to delete a node 
        function deleteNode(ll, node) {

            if (ll.head === null) { //if the node is the head

                console.log("there is no node to delete");

            } else if (ll.head === node) {

                ll.head = node.next;
                node.next = null;
            } else if (ll.tail === node) { //if the node is the tail
                let current = ll.head;

                while (current.next !== null) {
                    // check if the next node has the tail value
                    if (current.next == ll.tail) {
                        current.next = null;
                        ll.tail = current;
                        console.log(`current is ${current.content}  /n ${ll.tail.content}`);
                    } else { // if the current doesn't have the tail then move the current to the next node
                        current = current.next;
                    }

                } // end of while loop
            } else {
                //if the node from the middle
                //I need to take the next from the deleted node and assigin it to the previous node

                let current = ll.head;
              
                //check if the next node is the node I wanted to delete

                while (current.next !== null) { // I can make while(1) which is inifintie loop and break it after matching the condition
                    // but for better solution I will loop to the end of the serie in case the node weren't exists
                    if (current.next === node) {
                        current.next = node.next;
                    } else {
                        current = current.next;
                            } 
                } //end of the while loop
            } // end else

        } //end of the function deletedNode


        //function to move a node to the head 
        function moveNodeToHead(ll , node){
            // I will update the node and give the next of this node to the previous one
            // give this node.next the next of the current head
            // updating the head on the linkedList
            

        }



        let n = {
            content: 4,
            next: null
        };
        let m = {
            content: 5,
            next: null
        };
        let v = {
            content: 6,
            next: null
        };

        let a = {
            content: 4,
            next: null,
        };
        let b = {
            content: 5,
            next: null
        };
        let c = {
            content: 6,
            next: null
        }
        add(n, linkedList);
        add(m, linkedList);
        add(v, linkedList);
        add(a, linkedList);
        add(b, linkedList);
        add(c, linkedList);