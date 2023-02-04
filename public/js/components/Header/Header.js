import Component from "../Component/Component.js";
export default class Header extends Component {
    #logo;
    constructor(parentElement, text) {
        super(parentElement, "header");
        this.#logo = text;
    }
    render() {
        super.render();
        this.domElement.innerHTML = `<h1> <img src = ${this.#logo} alt = logo-pokemon <h1>`;
    }
}
