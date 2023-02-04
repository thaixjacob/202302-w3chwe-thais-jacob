import Component from "../Component/Component.js";
import Header from "../Header/Header.js";

export default class App extends Component {
  #header: Header;
  constructor(parentElement: HTMLElement | undefined) {
    super(parentElement, "app-container", "div");
    this.#header = new Header(this.domElement, "hola");
  }

  render(): void {
    super.render();
    this.#header.render();
  }
}
