import Component from "../Component/Component.js";

export default class Header extends Component {
  #logo: string;
  constructor(parentElement: HTMLElement, text: string) {
    super(parentElement, "logo-container");
    this.#logo = text;
  }

  render(): void {
    super.render();
    this.domElement.innerHTML = `<h1> <img src = ${
      this.#logo
    } alt = logo-pokemon <h1>`;
  }
}
