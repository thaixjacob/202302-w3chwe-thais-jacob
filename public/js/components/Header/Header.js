import Component from "../Component/Component.js";
export default class Header extends Component {
    #text;
    constructor(parentElement, text) {
        super(parentElement, "header");
        this.#text = text;
    }
    render() {
        super.render();
        this.domElement.innerHTML = `<h1>${this.#text}<h1>`;
    }
}
