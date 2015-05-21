// LICENSE : MIT
"use strict";
import {Context} from "material-flux"
import CounterActions from "./action/CounterActions"
import CounterStore from "./store/CounterStore"
export default class MainContext extends Context{
    constructor(...args){
        super(...args);
        this.counterStore = new CounterStore(this);
        this.counterActions = new CounterActions(this);
    }
}