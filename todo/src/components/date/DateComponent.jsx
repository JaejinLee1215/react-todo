import './DateComponent.css';

const DateComponent = () => {
    const now = new Date();
    const days = now.getDate();
    const month = now.getMonth() + 1;
    const monthTable = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];
    const year = now.getFullYear();

    return (
    <div className='date'>
        <div className='day'>{days}</div>
        <div className='date-inner'>
            <div className='month'>{monthTable[month]}</div>
            <div className='year'>{year}</div>
        </div> 
    </div>)
}

export default DateComponent;