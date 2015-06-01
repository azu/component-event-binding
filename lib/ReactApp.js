// LICENSE : MIT
"use strict";
import React from "react"
import SimpleComponent from "./component/simple-bind-component"
import IDBComponent from "./component/idempotent-bind-component"
export default function ReactApp(context) {
    React.render(
        <div>
            <p>idempotent-bind</p>
            <IDBComponent context={context}/>

            <p>simple-bind</p>
            <SimpleComponent context={context}/>
        </div>,
        document.getElementById("js-react")
    );
}
