import Component from "../Component/Component.js";
export default class Header extends Component {
    #logo;
    constructor(text, parentElement, cssClasses = "") {
        super(parentElement, "header", cssClasses);
        this.#logo = text;
    }
    render() {
        super.render();
        this.element.innerHTML = `<h1><img src ="${this.#logo}"</h1>`;
    }
}
