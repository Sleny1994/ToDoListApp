export class TodoItems {
    id: number = 1;
    done: boolean = false;
    content: string = '';

    // constructor(id: number, done: boolean, content: string) {
    //     this.id = id;
    //     this.done = done;
    //     this.content = content;
    // }

    // toJson(): string {
    //     return JSON.stringify(this);
    // }

    // static fromJson(json: string): TodoItems {
    //     return JSON.parse(json, (key, value) => {
    //         if (key === 'TodoItems') {
    //             return new TodoItems(value.id, value.done, value.content);
    //         }
    //         return value;
    //     });
    // }
}