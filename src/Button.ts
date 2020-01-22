import {ViewInterface} from './ViewInterface'


export const Button = (content:ViewInterface, action:Function) => {

    if(!customElements.get('compose-button')) {
        class ComposeButton extends HTMLElement {

            constructor(){
                super()
            }

        }
        customElements.define('compose-button', ComposeButton)
    }

    return new class buttonClass implements ViewInterface {
        render() {

        }

    }
}