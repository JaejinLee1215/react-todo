import './Input.css';

const Input = ({onKeyPress, onChange, text }) => { //props 받을 것을 선언

    return <div>
        <input className='input' placeholder='작업 추가' onKeyPress={onKeyPress} onChange={onChange} value={text}/>
        </div>
}

export default Input;