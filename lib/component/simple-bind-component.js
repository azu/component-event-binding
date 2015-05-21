// LICENSE : MIT
"use strict";
import React from "react"
export default class IBComponent extends React.Component {
    constructor(...args) {
        super(...args);
        this.counterStore = this.props.context.counterStore;
        this.couterActions = this.props.context.counterActions;
        this.state = {
            count: this.counterStore.getCount()
        };
        // bind
        this.onChange = this._onChange.bind(this);
    }

    _onChange() {
        this.setState({
            count: this.counterStore.getCount()
        });
    }

    componentWillMount() {
        this.counterStore.onChange(this.onChange);
    }

    componentWillUnmount() {
        this.counterStore.removeChangeListener(this.onChange);
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