export default class Banner {
    private text: string = '';

    public constructor(text: string) {
        this.text = text;
    }

    public showWithParen(): void {
        console.log('(' + this.text + ')');
    }

    public showWithAster() {
        console.log('*' + this.text + '*');
    }
}
