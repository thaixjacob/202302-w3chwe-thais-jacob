class Component {
    parentElement;
    domElement;
    constructor(parentElement, className, tag = "article") {
        this.parentElement = parentElement;
        this.domElement = document.createElement(tag);
        this.domElement.className = className;
    }
    render() {
        this.parentElement.appendChild(this.domElement);
    }
}
export default Component;
