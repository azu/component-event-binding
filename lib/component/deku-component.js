// Define a name for the component that can be used in debugging
import {element} from 'deku'

function onChange(component, el, setState) {
    let { props } = component;
    setState({
        count: props.context.counterStore.getCount()
    });
}
export default {
    initialState: function (props) {
        return {count: 0};
    },

    afterMount (component, el, setState) {
        let { props, state } = component;
        setState({
            count: props.context.counterStore.getCount()
        });

        props.context.counterStore.onChange(()=> {
            onChange(component, el, setState)
        });
    },

    beforeUnmount(component, el) {
        let {props} = component;
        props.context.counterStore.removeChangeListener(onChange);
    },

    render(component) {
        let {props, state} = component;

        function onClick() {
            props.context.counterActions.countUp();
        }

        return <div>
            <button onClick={onClick}>{state.count}</button>
        </div>
    }
}