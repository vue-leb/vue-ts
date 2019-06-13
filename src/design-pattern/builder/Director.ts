import Builder from '@/design-pattern/builder/Builder';

export default class Director {
    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    public construct(): void {
        this.builder.makeTitle('HI~~~~~!');
        this.builder.makeString('You and Me');
        this.builder.makeItems(['love', 'look at me', 'goodbye']);
        this.builder.close();
    }
}
