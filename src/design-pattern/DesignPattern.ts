import {Component, Vue} from 'vue-property-decorator';
import Print from '@/design-pattern/adapter/Print';
import PrintBanner1 from '@/design-pattern/adapter/PrintBanner1';
import PrintBanner2 from '@/design-pattern/adapter/PrintBanner2';
import Display from '@/design-pattern/decorator/Display';
import StringDisplay from '@/design-pattern/decorator/StringDisplay';
import SideBorder from '@/design-pattern/decorator/SideBorder';
import FullBorder from '@/design-pattern/decorator/FullBorder';
import AbstractDisplay from '@/design-pattern/template/AbstractDisplay';
import CharDisplay from '@/design-pattern/template/CharDisplay';
import TextDisplay from '@/design-pattern/template/TextDisplay';
import TextBuilder from '@/design-pattern/builder/TextBuilder';
import Director from '@/design-pattern/builder/Director';
import HtmlBuilder from '@/design-pattern/builder/HtmlBuilder';

@Component
export default class DesignPattern extends Vue {

    private created() {
        this.adapter();
        this.decorator();
        this.template();
        this.builder();
    }

    /**
     * 제공되는것 (교류 100볼트) : Banner 클래스(showWithParen, showWithAster)
     * 교환장치 (어댑터) : PrintBanner 클래스
     * 필요한 것 (직류 12qhfxm) : Print 인터페이스(printWeak, printStrong)
     */
    private adapter() {
        console.log('==adapter===========================');
        const print1: Print = new PrintBanner1('Hello');
        const print2: Print = new PrintBanner2('Hello');

        print1.printWeak();
        print1.printStrong();

        print2.printWeak();
        print2.printStrong();
        console.log('====================================');
    }

    /**
     * 장식과 내용물을 동일시하기
     *
     * 문자열 주변에 장식을 만들어서 표시함.
     *
     * Display : 문자열 표시용의 추상 클래스
     * StringDisplay: 1행으로 구성된 문자열 표시용의 클래스
     * Border : 장식을 나타내는 클래스
     * SideBorder : 좌우에 장식을 붙이는 클래스
     * FullBorder: 상하좌우에 장식을 붙이는 클래스
     */
    private decorator() {
        console.log('==decorator=========================');
        const b1: Display = new StringDisplay('Hello, world.');
        const b2: Display = new SideBorder(b1, '#');
        const b3: Display = new FullBorder(b2);

        b1.show();
        b2.show();
        b3.show();

        const b4: Display = new SideBorder(
            new FullBorder(
                new FullBorder(
                    new SideBorder(
                        new FullBorder(
                            new StringDisplay('Typescript study.')
                        )
                        , '*')
                )
            )
            , '/');

        b4.show();

        console.log('====================================');
    }

    /**
     * 문자나 문자열을 5회 반복 표시하기
     *
     * AbstractDisplay : 메소드 display만 구현되고 있는 추상클래스
     * CharDisplay : 메소드 open, print, close를 구현하고 있는 클래스
     * StringDisplay : 메소드 open, print, close를 구현하고 있는 클래스
     */
    private template() {
        console.log('==template===========================');
        const d1: AbstractDisplay = new CharDisplay('H');
        const d2: AbstractDisplay = new TextDisplay('Hello, world !!!');

        d1.display();
        d2.display();
        console.log('====================================');
    }

    private builder() {
        console.log('==builder===========================');
        const textBuilder: TextBuilder = new TextBuilder();
        const director1: Director = new Director(textBuilder);
        director1.construct();
        console.log(textBuilder.getResult());

        const htmlBuilder: HtmlBuilder = new HtmlBuilder();
        const director2: Director = new Director(htmlBuilder);
        director2.construct();
        console.log(htmlBuilder.getResult());

        console.log('====================================');
    }
}
