import './Week.css'

const Week = () => {
    const now = new Date();
    const week = now.getDay()
    const weekTable = ['SUNDAY','MONMDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY',];
    return <div className='week'>{weekTable[week]}</div>
}

export default Week;