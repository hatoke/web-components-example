import { DomUtilty } from "../utilty/dom.utility";

class Button extends HTMLElement {
  constructor() {
    super();

    const domUtilty = new DomUtilty();

    this.attachShadow({ mode: "open" });
    const render = this.render();
    const template = domUtilty.newElement(render);
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.state = {
      button: this.shadowRoot.querySelector(".ex-button"),
      text: this.shadowRoot.querySelector("span"),
    };
  }

  static get observedAttributes() {
    return ["text"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.state[name].innerText = newValue;
  }

  render() {
    return `
            <div class="ex-button">    
                <span></span>
            </div>
            
            <style>
            .ex-button{
                width: auto;
                padding: 10px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                border-radius: 3px;
                cursor: pointer;
                background-color: #487eb0;
                color: #fff;    
                transition: 200ms all ease;
            }

            .ex-button > * {
                user-select: none;
            }
            
            .ex-button span{
                font-size: 16px;
            }
            
            .ex-button:hover{
                background-color: #40739e !important;
            }
            </style>
        `;
  }
}

window.customElements.define("ex-button", Button);
