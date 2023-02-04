export default class Component {
    #parentElement;
    element;
    constructor(parentElement, tag, cssClasses = "") {
        this.#parentElement = parentElement;
        this.element = document.createElement(tag);
        this.element.className = cssClasses;
    }
    render() {
        this.#parentElement?.appendChild(this.element);
    }
}
