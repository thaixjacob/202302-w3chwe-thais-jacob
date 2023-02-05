import Component from "../Component/Component.js";

export default class Button extends Component {
  #text: string;
  #btnType: "button";

  constructor(
    text: string,
    btnType: "button",
    className: string,
    parentElement: HTMLElement | undefined
  ) {
    super(parentElement, className, "button");
    this.#text = text;
    this.#btnType = btnType;
  }

  render(): void {
    super.render();
    this.domElement.textContent = this.#text;
    this.domElement.setAttribute("type", this.#btnType);
  }
}
