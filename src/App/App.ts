import Component from "../components/Component/Component.js";
export default class App extends Component {
  #header: Header;

  constructor(parentElement: HTMLElement | undefined) {
    super(parentElement, "div");
    this.#header = new Header(
      "./assets.pokemon-logo.svg",
      this.element,
      "header"
    );
  }

  render(): void {
    super.render();
    this.#header.render();
  }
}
