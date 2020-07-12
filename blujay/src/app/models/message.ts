export class Message {
    content: string;
    stlye: '' | 'is-info' | 'is-danger' | 'is-warning' | 'is-success'

    constructor(content, stlye?) {
        this.content = content;
        this.stlye = stlye || 'is-info'
    }
}
