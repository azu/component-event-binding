// LICENSE : MIT
"use strict";
import {element,tree,render} from 'deku'
import DekuComponent from './component/deku-component.js'
export default function DekuApp(context) {
    let app = tree(
        <div>
            <p>deku-component</p>
            <DekuComponent context={context}/>

        </div>
    );

    render(app, document.getElementById("js-deku"));
}
