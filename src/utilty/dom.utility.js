export class DomUtilty {    
    constructor(){
        
    }

    newElement(HTMLTemplate) {
        const template = document.createElement("template");
        template.innerHTML = HTMLTemplate;
        return template;
    }
}