import { Task } from "./task";
export class Tab {
    constructor(
        public id?:number,
        public label?:string,
        public tasks: Task[] = []
    ){}
}