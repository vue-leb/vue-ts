export default abstract class AbstractDisplay {
    protected displayChar: Array<string> = [];

    public abstract open(): void;

    public abstract print(): void;

    public abstract close(): void;

    public display(): void {
        this.open();

        for (let i: number = 0; i < 5; i++) {
            this.print();
        }

        this.close();

        console.log(this.displayChar.join(''));
    }
}
