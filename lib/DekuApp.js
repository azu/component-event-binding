// LICENSE : MIT
"use strict";
import {element,tree,render} from 'deku'
import DekuComponent from './component/deku-component.js'
export default function DekuApp(context) {
    let app = tree(
        <div className="DekuApp">
            <h2>Deku</h2>

            <p>deku-component</p>
            <DekuComponent context={context}></DekuComponent>
            <button onClick={destroy}>unmount</button>
        </div>
    );


    function destroy() {
        app.unmount();
    }
    render(app, document.getElementById("js-deku"));
}
