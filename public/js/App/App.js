import Component from "../components/Component/Component.js";
import Header from "../components/Header/Header.js";
import Button from "../components/Button/Button.js";
export default class App extends Component {
    #header;
    #childrenButton;
    constructor(parentElement) {
        super(parentElement, "app-container", "main");
        this.#header = new Header(this.domElement, "./assets/pokedex-logo.png");
        this.#childrenButton = [
            new Button("Back", "button", "nes-btn", this.domElement),
            new Button("Next", "button", "nes-btn", this.domElement),
            new Button("My favorites", "button", "nes-btn is-primary", this.domElement),
        ];
    }
    render() {
        super.render();
        this.#header.render();
        this.#childrenButton.forEach((component) => {
            component.render();
        });
    }
}
