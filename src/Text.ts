
import {ViewInterface} from './ViewInterface'


export const Text = (sometext:string) => {
    
    if(!customElements.get('compose-text')) {
        class ComposeText extends HTMLElement {

            constructor(){
                super()
                let shadowRoot = this.attachShadow({ mode: 'open' });
                let attr:any = this.getAttribute('text')
                let style = this.getAttribute('style')
                shadowRoot.innerHTML =`<div id="text" style="${style}">${attr}</div>`
            }
        }
        customElements.define('compose-text', ComposeText)
    }

    return new class textClass implements ViewInterface { 
        render() {
        return `<compose-text text="${sometext}" style="${this.style()}"></compose-text>`
        }

        styling = {
            italic:'',
            bold:'',
            size:'',
            font: ''

        }

        style(): string {
            return this.styling.italic 
            + this.styling.bold
            + this.styling.size
            + this.styling.font
        }
    
        bold() {
            this.styling.bold = 'font-weight: bold; '
            return this
        }

        italic() {
            this.styling.italic = 'font-style: italic; '
            return this
        }

        size(size:number) {
            this.styling.size = `font-size: ${size}px; `
            return this
        }

        font(font:string) {
            this.styling.font = `font-family: ${font}; `
            return this
        }
    }

}