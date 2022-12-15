import { DomUtilty } from "../utilty/dom.utility";

class Card extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'desc'];
    }

    get title() {
        return this.getAttribute("title");
    }

    set title(val) {
        if (val) {
            this.setAttribute('title', val);
        } else {
            this.removeAttribute('title');
        }
    }

    get desc() {
        return this.getAttribute("desc");
    }

    set desc(val) {
        if (val) {
            this.setAttribute('desc', val);
        } else {
            this.removeAttribute('desc');
        }
    }

    constructor() {
        super();

        this.domUtilty = new DomUtilty();
        this.attachShadow({ mode: "open" });
        const template = this.initRender();
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.state = {
            title: this.shadowRoot.querySelector("h1"),
            desc: this.shadowRoot.querySelector("p")
        }
    }

    connectedCallback() {
        //event list, example click
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.state[name].innerText = newValue;
    }

    render() {
        return `
            <div>
                <h1></h1>
                <p></p>
            </div>

            <style>            
            </style>
        `;
    }

    initRender() {
        const template = document.createElement("template");
        template.innerHTML = this.render();
        return template;
    }
}

window.customElements.define("ex-card", Card);