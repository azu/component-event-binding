// LICENSE : MIT
"use strict";
import React from "react"
import { bind, unbind } from "idempotent-bind"
export default class IBComponent extends React.Component {
    constructor(...args) {
        super(...args);
        this.counterStore = this.props.context.counterStore;
        this.couterActions = this.props.context.counterActions;
        this.state = {
            count: this.counterStore.getCount()
        };
    }

    _onChange() {
        this.setState({
            count: this.counterStore.getCount()
        });
    }

    componentWillMount() {
        this.counterStore.onChange(bind(this._onChange, this));
    }

    componentWillUnmount() {
        this.counterStore.removeChangeListener(unbind(this._onChange, this));
    }

    onClick() {
        this.couterActions.countUp();
    }

    render() {
        return <div>
            <button onClick={this.onClick.bind(this)}>{this.state.count}</button>
        </div>
    }
}