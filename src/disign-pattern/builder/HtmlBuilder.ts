import Builder from '@/disign-pattern/builder/Builder';

export default class HtmlBuilder extends Builder {
    private buffer: Array<string> = [];

    public makeTitle(title: string): void {
        this.buffer.push(`<html>\n<head>\ntitle>${title}</title>\n</head>\n`);
        this.buffer.push(`<h1>${title}]</h1>\n`);
    }

    public makeString(text: string): void {
        this.buffer.push(`<p>${text}</p>\n`);

    }

    public makeItems(items: Array<string>): void {
        this.buffer.push('<ul>\n');
        for (const item of items) {
            this.buffer.push(`<li>${item}</li>\n`);
        }
        this.buffer.push('</ul>\n');
    }

    public close(): void {
        this.buffer.push('</body>\n</html>\n');
    }

    public getResult(): string {
        return this.buffer.join('');
    }

}
