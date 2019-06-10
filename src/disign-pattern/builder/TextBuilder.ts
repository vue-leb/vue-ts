import Builder from '@/disign-pattern/builder/Builder';

export default class TextBuilder extends Builder {
    private buffer: Array<string> = [];

    public makeTitle(title: string): void {
        this.buffer.push('=================\n');
        this.buffer.push(`[${title}]\n`);
        this.buffer.push('\n');
    }

    public makeString(text: string): void {
        this.buffer.push(`* ${text}\n`);
        this.buffer.push('\n');
    }

    public makeItems(items: Array<string>): void {
        for (const item of items) {
            this.buffer.push(`- ${item}\n`);
        }
        this.buffer.push('\n');
    }

    public close(): void {
        this.buffer.push('=================\n');
    }

    public getResult(): string {
        return this.buffer.join('');
    }

}
