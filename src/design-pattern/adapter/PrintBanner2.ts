import Banner from '@/design-pattern/adapter/Banner';
import Print from '@/design-pattern/adapter/Print';

export default class PrintBanner2 implements Print {
    private banner: Banner;

    public constructor(text: string) {
        this.banner = new Banner(text);
    }

    public printWeak(): void {
        this.banner.showWithParen();
    }

    public printStrong(): void {
        this.banner.showWithAster();
    }

}
