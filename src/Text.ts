
import {ViewInterface} from './ViewInterface'


export const Text = (text:string) => {
    
    if(!customElements.get('compose-text')) {
        class ComposeText extends HTMLElement {
            constructor(){
                super()

                let shadowRoot = this.attachShadow({ mode: 'open' });
                shadowRoot.innerHTML =`<div>${text}</div>`
            }

            get text() {
                return this.getAttribute(text)
            }
            set text(newText:string) {
                this.setAttribute('text', newText)
            }
        }
        customElements.define('compose-text', ComposeText)
    }

    return new class textClass implements ViewInterface { 
        render() {
        return `<compose-text text="${text}" style=""></compose-text>`
        }
    
        bold() {

            return this
        }
    }

}