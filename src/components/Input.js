class Input extends HTMLElement{
    static get observedAttributes(){
        return ["type", "value", "placeholder"]
    }

    constructor(){
        super();

        const template = this.initRender();
        this.attachShadow({mode: "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.state = {
            input: this.shadowRoot.querySelector("input")
        }    
    }

    connectedCallback(){
        this.state.input.setAttribute("placeholder", this.placeholder || "");
        this.state.input.setAttribute("type", this.type || "text");
        this.state.value && this.state.input.setAttribute("value", this.value);
    }

    render(){
        return `
            <input/>
        `
    }

    initRender(){
        const template = document.createElement("template");
        template.innerHTML = this.render();
        return template;
    }
}

window.customElements.define("ex-input", Input);