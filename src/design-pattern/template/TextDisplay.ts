import AbstractDisplay from '@/design-pattern/template/AbstractDisplay';

export default class TextDisplay extends AbstractDisplay {
    private text: string;
    private width: number;

    constructor(text: string) {
        super();
        this.text = text;
        this.width = text.length;
    }

    public open(): void {
        this.printLine();
    }

    public print(): void {
        this.displayChar.push(`|${this.text}|`);
    }

    public close(): void {
        this.printLine();
    }

    private printLine(): void {
        this.displayChar.push('+');

        for (let i: number = 0; i < this.width; i++) {
            this.displayChar.push('-');
        }

        this.displayChar.push('+\n');
    }
}
