// Define a name for the component that can be used in debugging
import {element} from 'deku'

// stub
var onChange = ()=> {

};

function initialState(props) {
    return {count: 0};
}

function afterMount(component, el, setState) {
    let { props, state } = component;
    setState({
        count: props.context.counterStore.getCount()
    });
    onChange = ()=> {
        setState({
            count: props.context.counterStore.getCount()
        });
    };
    props.context.counterStore.onChange(onChange);
}

function beforeUnmount(component, el) {
    let {props} = component;
    props.context.counterStore.removeChangeListener(onChange);
}
function render(component) {
    let {props, state} = component;

    function onClick() {
        props.context.counterActions.countUp();
    }

    return <div>
        <button onClick={onClick}>{state.count}</button>
    </div>
}

export default {
    initialState,
    afterMount,
    beforeUnmount,
    render
}