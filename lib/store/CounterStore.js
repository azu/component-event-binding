// LICENSE : MIT
"use strict";
import {Store} from "material-flux"
import {events} from "../action/CounterActions"
export default class CounterStore extends Store {
    constructor(...args) {
        super(...args);
        this.setState({
            counter: 0
        });
        this.register(events.countUp, this.onCountUp.bind(this));
    }

    getCount() {
        return this.state.counter;
    }

    onCountUp() {
        this.setState({
            counter: this.getCount() + 1
        });
    }
}