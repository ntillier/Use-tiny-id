type UniqueIdGeneratorOptions = {
    numberOfCharacters?: number;
    lastGeneratedId?: string;
};
declare class UniqueIdGenerator {
    chars: string;
    status: number[];
    constructor(chars?: string, options?: UniqueIdGeneratorOptions);
    config(options?: UniqueIdGeneratorOptions): this;
    count(): number;
    increment(): UniqueIdGenerator;
    next(): string;
    current(): string;
}
export = UniqueIdGenerator;
