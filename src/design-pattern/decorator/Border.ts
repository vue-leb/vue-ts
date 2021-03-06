import Display from '@/design-pattern/decorator/Display';

export default abstract class Border extends Display {
    protected display: Display;

    protected constructor(display: Display) {
        super();
        this.display = display;
    }

}
