import Component from "../components/Component/Component.js";
import Header from "../components/Header/Header.js";
export default class App extends Component {
    #header;
    constructor(parentElement) {
        super(parentElement, "div");
        this.#header = new Header("./assets.pokemon-logo.svg", this.element, "header");
    }
    render() {
        super.render();
        this.#header.render();
    }
}
