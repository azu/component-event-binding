// Define a name for the component that can be used in debugging
import {element} from 'deku'

export default {
    initialState: function (props) {
        return {count: this.props.context.counterStore.getCount()};
    },

    render(compoent) {
        let {props, state} = component;
        return <div>
            <button onClick={this.onClick.bind(this)}>{state.count}</button>
        </div>
    }
}