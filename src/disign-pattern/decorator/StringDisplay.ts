import Display from '@/disign-pattern/decorator/Display';

export default class StringDisplay extends Display {
    private text: string = '';

    constructor(text: string) {
        super();
        this.text = text;
    }

    public getColumns(): number {
        return this.text.length;
    }

    public getRowText(row: number): string {
        let returnText = null;

        if (row === 0) {
            returnText = this.text;
        }

        return returnText;
    }

    public getRows(): number {
        return 1;
    }

}
