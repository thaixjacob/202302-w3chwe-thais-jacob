import Component from "../components/Component/Component.js";
import Header from "../components/Header/Header.js";
export default class App extends Component {
    #header;
    constructor(parentElement) {
        super(parentElement, "app-container", "div");
        this.#header = new Header(this.domElement, "./assets/pokedex-logo.svg");
    }
    render() {
        super.render();
        this.#header.render();
    }
}
