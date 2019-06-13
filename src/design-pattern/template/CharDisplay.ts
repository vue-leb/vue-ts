import AbstractDisplay from '@/design-pattern/template/AbstractDisplay';

export default class CharDisplay extends AbstractDisplay {
    private char: string;

    constructor(char: string) {
        super();
        this.char = char;
    }

    public open(): void {
        this.displayChar.push('<<');
    }

    public print(): void {
        this.displayChar.push(this.char);
    }

    public close(): void {
        this.displayChar.push('>>');
    }

}
