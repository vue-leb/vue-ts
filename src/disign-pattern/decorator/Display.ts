export default abstract class Display {
    public abstract getColumns(): number;

    public abstract getRows(): number;

    public abstract getRowText(row: number): string;

    public show(): void {
        for (let i = 0; i < this.getRows(); i++) {
            console.log(this.getRowText(i));
        }
    }

}
