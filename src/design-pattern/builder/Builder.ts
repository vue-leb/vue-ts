export default abstract class Builder {
    public abstract makeTitle(title: string): void;

    public abstract makeString(text: string): void;

    public abstract makeItems(items: Array<string>): void;

    public abstract close(): void;
}
