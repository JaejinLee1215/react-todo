import TodoItem from '../todo-item/Todo-item';
import './Todo-list.css';

import useLocalStorage from '../../hooks/useLocalStorage'
import Input from '../input/Input';
import { SwipeableList, SwipeableListItem } from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import {useState} from 'react';

const TodoList = () => { //props 받을 것을 선언
    const [todo, setTodo] = useLocalStorage("todo", [])
    const [text, setText] = useState('');
 
    const onChange = (e) => {
      setText(e.target.value);
    };

    const onClick = (idx) => {
        setTodo(...[todo.map(item => item.id === idx ? ({ ...item, checked: !item.checked}) : item)])
    }

    const onKeyPress = (e) => {
        if(e.key === 'Enter') {
            //변경될 수 없는 오브젝트에서 ID+1씩 밀고 생성
            setTodo([{id: 0, description: e.target.value, checked: false}, ...todo.map(item => ({...item, id: ++item.id}))])
            setText('');
        }
    }

    const onDelete = (idx) => (
        setTodo(todo.filter(item => item.id !== idx))
    )

    return (
        <>
        <div className='todo-list'>
            <SwipeableList threshold={0.85}>
                {todo.map((item, index) => (
                    <SwipeableListItem
                    key={index}
                    swipeLeft={{
                        content : (
                            <div style={{ width: '100%', height: '100%', verticalAlign: 'middle', backgroundColor: '#ff3b30' }}>
                                    </div>
                        ),
                        action: () => {
                            onDelete(item.id)
                        }
                    }}
                >
                    <TodoItem key={index} id={item.id} description={item.description} checked={item.checked} onClick={onClick}/>
                </SwipeableListItem>
            ))}
        </SwipeableList>
        </div>
            <Input onKeyPress={onKeyPress} onChange={onChange} text={text} />
        </>
    )

}

export default TodoList;