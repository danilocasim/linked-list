import { LinkedList } from "./linked-list.js";

const list = new LinkedList();
list.append("FIRST");
list.append("SECOND");
list.append("THIRD");
list.append("FOURTH");
list.append("FIFTH");
list.append("SIXTH");
list.removeAt(6);
console.log(list);
