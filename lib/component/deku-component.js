// Define a name for the component that can be used in debugging
import {element} from 'deku'

function initialState(props) {
    return {
        count: props.context.counterStore.getCount(),
        onChange(){
            // noop
        }
    };
}

function afterMount(component, el, setState) {
    let { props, state } = component;
    setState({
        count: props.context.counterStore.getCount()
    });
    var onChange = ()=> {
        setState({
            count: props.context.counterStore.getCount()
        });
    };
    // onChange as state for Unmount
    state.onChange = onChange;
    props.context.counterStore.onChange(onChange);
}

function beforeUnmount(component, el) {
    let {props, state} = component;
    props.context.counterStore.removeChangeListener(state.onChange);
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