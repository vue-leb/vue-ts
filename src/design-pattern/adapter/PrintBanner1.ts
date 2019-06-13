import Banner from '@/design-pattern/adapter/Banner';
import Print from '@/design-pattern/adapter/Print';

export default class PrintBanner1 extends Banner implements Print {
    public constructor(text: string) {
        super(text);
    }

    public printWeak(): void {
        this.showWithParen();
    }

    public printStrong(): void {
        this.showWithAster();
    }

}
