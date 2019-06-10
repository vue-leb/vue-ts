import Banner from '@/disign-pattern/adapter/Banner';
import Print from '@/disign-pattern/adapter/Print';

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
