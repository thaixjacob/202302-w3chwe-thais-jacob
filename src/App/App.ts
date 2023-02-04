import Component from "../components/Component/Component.js";
import Header from "../components/Header/Header.js";

export default class App extends Component {
  #header: Header;
  constructor(parentElement: HTMLElement | undefined) {
    super(parentElement, "app-container", "div");
    this.#header = new Header(this.domElement, "./assets/pokedex-logo.png");
  }

  render(): void {
    super.render();
    this.#header.render();
  }
}
