// LICENSE : MIT
"use strict";
import {Action} from "material-flux"
export var events = {
    "countUp": Symbol("countUp")
};
export default class CounterActions extends Action {
    countUp() {
        this.dispatch(events.countUp);
    }
}