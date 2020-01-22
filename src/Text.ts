
import {ViewInterface} from './ViewInterface'


export const Text = (sometext:string) => {
    
    if(!customElements.get('compose-text')) {
        class ComposeText extends HTMLElement {

            constructor(){
                super()
                let shadowRoot = this.attachShadow({ mode: 'open' });
                let attr:any = this.getAttribute('text')
                shadowRoot.innerHTML =`<div id="text">${attr}</div>`
            }
        }
        customElements.define('compose-text', ComposeText)
    }

    return new class textClass implements ViewInterface { 
        render() {
        return `<compose-text text="${sometext}" style=""></compose-text>`
        }
    
        bold() {

            return this
        }
    }

}