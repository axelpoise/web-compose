import {Text} from '../src/Text'
import {html, render} from 'lit-html'
import {View} from '../src/View'
class TestElement extends HTMLElement {
    constructor () {
        super()
        this.shadowRoot.innerHTML = View( 
            Text('test')
        ).render()
            
    }
    

}

customElements.define('test-element', TestElement)
render( html`<test-element></test-element>`, document.body)