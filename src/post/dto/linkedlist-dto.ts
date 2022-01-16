export class NodeT {
     value:number ;
     next:NodeT
    constructor(value:number){
        this.value = value;
    }
}

export function printLinkedList(head:NodeT) {
   if(head == null) {
       console.log('List is empty');
   }else {
       let temp:NodeT = head ;
       while(temp != null) {
           console.log(temp.value);
           temp = temp.next;
           if(temp!= null){
               console.log("->");
           }
       }
   } 
}