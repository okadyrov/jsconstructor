import {col, row} from "../utils";

class Blocks {
    constructor(value, options) {
        this.value = value
        this.options = options
    }
    toHTML() {
        throw new Error('HTML method should be implemented!')
    }
}

export class TitleBlock extends Blocks {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {tag, styles} = this.options
        return row(col(`
        <${tag}>${this.value}<${tag}>
    `), styles)
    }
}
export class ImageBlock extends Blocks{
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const {alt, styles, imageStyles} = this.options
        const html = `<img src="${this.value}" alt="${alt}" style="${imageStyles}" />`
        return row(html, styles)
    }
}
export class TextBlock extends Blocks {
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        return row(col(`
      <p style="margin-bottom: 0;">${this.value}</p>
     `), this.options.styles)
    }
}
export class TextColumnsBlock extends Blocks{
    constructor(value, options) {
        super(value, options);
    }
    toHTML() {
        const html = this.value.map(item => col(item))
        return row(html.join(''), this.options.styles)
    }
}