import { ViewInterface } from "./ViewInterface";


export let View = (object:ViewInterface)  => {
    
    return new class viewClass {
        element:ViewInterface;
        constructor() {
            this.element = object;
        }
        render () {
            return this.element.render()
        }
    }
    
    
}