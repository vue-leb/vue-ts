import Border from '@/design-pattern/decorator/Border';
import Display from '@/design-pattern/decorator/Display';

export default class FullBorder extends Border {
    constructor(display: Display) {
        super(display);
    }

    public getColumns(): number {
        return 1 + this.display.getColumns() + 1;
    }

    public getRowText(row: number): string {
        let returnText: string = '';

        if (0 === row) {
            returnText = '+' + this.makeLine('-', this.display.getColumns()) + '+';

        } else if (this.display.getRows() + 1 === row) {
            returnText = '+' + this.makeLine('-', this.display.getColumns()) + '+';

        } else {
            returnText = '|' + this.display.getRowText(row - 1) + '|';
        }

        return returnText;
    }

    public getRows(): number {
        return 1 + this.display.getRows() + 1;
    }

    private makeLine(charecter: string, count: number): string {
        const buffer: Array<string> = [];

        for (let i = 0; i < count; i++) {
            buffer.push(charecter);
        }

        return buffer.join('');
    }
}
