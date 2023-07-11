import './Wrapper.css';

const Wrapper = (props) => { //props 받을 것을 선언

    return <div className='wrapper'>{props.children}</div>
}

export default Wrapper;