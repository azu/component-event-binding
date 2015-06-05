import {element} from 'deku'
// state event mapping
var events = {};
function initialState(props) {
    return {
        count: props.context.counterStore.getCount()
    };
}

function afterMount(component, el, setState) {
    let { props, state, id } = component;
    setState({
        count: props.context.counterStore.getCount()
    });
    var onChange = ()=> {
        setState({
            count: props.context.counterStore.getCount()
        });
    };
    // save onChange for unmount
    events[id] = events[id] || {};
    events[id].onChange = onChange;
    props.context.counterStore.onChange(onChange);
}

function beforeUnmount(component, el) {
    let {props, state, id} = component;
    var onChange = events[id].onChange;
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