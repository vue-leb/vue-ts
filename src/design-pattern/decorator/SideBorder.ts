import Border from '@/design-pattern/decorator/Border';
import Display from '@/design-pattern/decorator/Display';

export default class extends Border {
    private borderChar: string;

    constructor(display: Display, chracter: string) {
        super(display);
        this.borderChar = chracter;
    }

    public getColumns(): number {
        return 1 + this.display.getColumns() + 1;
    }

    public getRows(): number {
        return this.display.getRows();
    }

    public getRowText(row: number): string {
        return this.borderChar + this.display.getRowText(row) + this.borderChar;
    }
}
