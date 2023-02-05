import Component from "../Component/Component.js";
export default class Button extends Component {
    #text;
    #btnType;
    constructor(text, btnType, className, parentElement) {
        super(parentElement, className, "button");
        this.#text = text;
        this.#btnType = btnType;
    }
    render() {
        super.render();
        this.domElement.textContent = this.#text;
        this.domElement.setAttribute("type", this.#btnType);
    }
}
