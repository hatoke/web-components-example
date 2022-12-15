import { DomUtilty } from "../utilty/dom.utility";

class Card extends HTMLElement {
  static get observedAttributes() {
    return ["title", "desc"];
  }

  constructor() {
    super();

    this.domUtilty = new DomUtilty();
    this.attachShadow({ mode: "open" });
    const template = this.initRender();
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    this.state = {
      title: this.shadowRoot.querySelector("span"),
      desc: this.shadowRoot.querySelector("p"),
    };
  }

  connectedCallback() {
    //event list, example click
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.state[name].innerText = newValue;
  }

  render() {
    return `
            <div class="card-wrapper">
                <span class="card-title"></span>
                <p class="card-desc"></p>
            </div>

            <style>
            .card-wrapper{
                border: 1px solid #ddd;
                padding: 10px;
                border-radius: 3px;
                margin-bottom: 10px;
                display: flex;
                flex-direction: column;
                box-shadow: 0 1px 5px rgba(0,0,0,0.1);
            }
            
            .card-wrapper .card-title{                
                font-weight: 600;
                font-size: 18px;                
                margin-bottom: 10px;
            }

            .card-wrapper .card-desc{
                font-size: 14px;
                margin: 0;
            }
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
