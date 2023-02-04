import Component from "../Component/Component.js";

export default class Header extends Component {
  #logo: string;

  constructor(text: string, parentElement: HTMLElement, cssClasses = "") {
    super(parentElement, "header", cssClasses);
    this.#logo = text;
  }

  render(): void {
    super.render();
    this.element.innerHTML = `<h1><img src ="${this.#logo}"</h1>`;
  }
}
