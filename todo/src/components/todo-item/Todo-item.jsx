import './Todo-item.css';
import {ReactComponent as Unchecked} from '../../icon/uncheck.svg';
import {ReactComponent as Checked} from '../../icon/check.svg';


const TodoItem = ({id, description, checked, onClick}) => { //props 받을 것을 선언

    return (
        <div className='todo-item'>
            { checked ?  <div className='todo-item-description-checked'>{description}</div> :  <div className='todo-item-description-unchecked'>{description}</div> } 
            {/* //삼항연산자 */}
            {checked ? <button className='todo-item-checkbox' onClick={() => onClick(id)}><Checked /></button> : <button className='todo-item-checkbox' onClick={() => onClick(id)}><Unchecked /></button>}
        </div>
    )       
}

export default TodoItem;