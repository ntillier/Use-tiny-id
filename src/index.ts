const GENERATOR_ALPHABET: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

const defaultOptions = {
  
};

type UniqueIdGeneratorOptions = {
  numberOfCharacters?: number;
  lastGeneratedId?: string;
};

class UniqueIdGenerator {
  public chars: string;
  public status: number[];

  constructor(chars: string = GENERATOR_ALPHABET, options: UniqueIdGeneratorOptions = defaultOptions) {
    this.status = [0];
    this.chars = chars;

    this.config(options);
  }

  config (options: UniqueIdGeneratorOptions = defaultOptions) {

    // for the last generated id
    if (options.lastGeneratedId) {

      // we reset the status
      this.status = [];

      // we update it
      for (const i of options.lastGeneratedId) {
        this.status.push(this.chars.indexOf(i) || 0);
      }

      // we increment the status
      this.increment();
    }

    // for the required number of characters
    if (options.numberOfCharacters) {
      while (this.status.length < options.numberOfCharacters) {
        this.status.push(0);
      }
    }

    return this;
  }

  count () : number {
    let count = this.status[0];

    let i = 1;
    while (this.status[i]) {
      count += this.status[i] * Math.pow(this.chars.length + 1, i);
      i++;
    }

    return count;
  }

  increment (): UniqueIdGenerator {
    const charsLength = this.chars.length - 1;
    for (let i: number = 0, len: number = this.status.length; i < len; i++) {
      const v = this.status[i]++;
      if (v > charsLength) {
        this.status[i] = 0;
      } else {
        return this;
      }
    }
    this.status.push(0);
    return this;
  }

  next (): string {
    let str = this.current();
    this.increment();
    return str;
  }

  current (): string {
    let str = '';
    for (let i = this.status.length - 1; i >= 0;) {
      str += this.chars[this.status[i--]];
    }
    return str;
  }
}

export = UniqueIdGenerator;