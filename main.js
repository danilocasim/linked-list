import { LinkedList } from "./linked-list.js";

const list = new LinkedList();
list.append("TITE");
list.append(2);
list.append("f");
list.append("LOL");
list.append("PUDAY");
list.prepend("MAMAMO");
list.prepend("PEPE");

list.pop();
console.log(list.toString());
