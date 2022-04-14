import axios from 'axios'
import { useEffect, useState } from 'react'
import './calls.css'
import CallTypeImg from './CallTypeImg'
import DateTime from './DateTime'
import Record from './Record'

const Calls = () => {
    const [calls, setCalls] = useState([])
    const [sortedCalls, setSortedCalls] = useState([])
    const [callTypeSort, setCallTypeSort] = useState(2)

    useEffect(() => {
        ;(async () => {
            const { data: callsList } = await axios.post(
                'https://api.skilla.ru/mango/getList',
                {},
                {
                    headers: {
                        Authorization: `Bearer qwerty123`,
                    },
                }
            )
            setCalls(callsList)
            setSortedCalls(callsList)
        })()
    }, [])

    useEffect(()=>{
        if(callTypeSort !== 2){
            let filtredCalls = calls.filter(({in_out})=> in_out === callTypeSort.toString())
            setSortedCalls(filtredCalls)
            console.log('callTypeSort', filtredCalls)
        }else{
            setSortedCalls(calls)
        }
    },[callTypeSort, calls])

    const handleSort = ()=>{
        setCallTypeSort((prev)=>prev === 2 ? 0 : ++prev)
    }

    return (
        <div className='container'>
            <div className='sortColumn'>
                <div className='flex_center sortList'>
                    <p className='sortList_text'>Все ошибки</p>
                    <div className='searchWrapper'>
                        <img
                            src={
                                require('../../assets/icons/header_icons/arrow_down.svg')
                                    .default
                            }
                            alt='^'
                        />
                    </div>
                </div>
            </div>
            <div className='callsWrapper'>
                <div className='callsSort'>
                    <button
                        onClick={handleSort}
                        className='callsSort_button wdth_51'
                        style={{
                            color:
                                callTypeSort === 0
                                    ? '#28A879'
                                    : callTypeSort === 1
                                    ? '#005FF8'
                                    : '#899CB1',
                        }}
                    >
                        Тип
                    </button>
                    <button className='callsSort_button wdth_89'>Время</button>
                    <button className='callsSort_button wdth_128'>
                        Сотрудник
                    </button>
                    <button className='callsSort_button wdth_326'>
                        Звонок
                    </button>
                    <button className='callsSort_button wdth_214'>
                        Источник
                    </button>
                    <button className='callsSort_button wdth_461'>
                        Оценка
                    </button>
                    <button className='callsSort_button wdth_89a'>
                        Длительность
                    </button>
                </div>
                <ul className='callsList'>
                    {sortedCalls
                        .slice(-10)
                        .reverse()
                        .map(
                            (
                                {
                                    to_number,
                                    from_number,
                                    in_out,
                                    status,
                                    contact_company,
                                    date,
                                    person_avatar,
                                    person_name,
                                    person_surname,
                                    time,
                                    record,
                                    partnership_id,
                                },
                                key
                            ) => (
                                <li
                                    className='flex_center callsList_item'
                                    key={key}
                                >
                                    <CallTypeImg
                                        in_out={in_out}
                                        status={status}
                                    />
                                    <DateTime date={date} />
                                    <div className='wdth_128 callsList_item__person'>
                                        <img
                                            title={`${person_name} ${person_surname}`}
                                            style={{ width: 32 }}
                                            src={
                                                !!person_avatar
                                                    ? person_avatar
                                                    : require('../../assets/defaultImages/avatar.png')
                                                          .default
                                            }
                                            alt='avatar'
                                        />
                                        <img
                                            style={{
                                                userSelect: 'none',
                                                visibility: 'hidden',
                                            }}
                                            src={
                                                require('../../assets/icons/calls_icons/web.svg')
                                                    .default
                                            }
                                            alt='web'
                                        />
                                    </div>
                                    <div className='wdth_326 callsList_item__tel'>
                                        {   (in_out === "1" ? from_number[0] : to_number[0]) === '7' ? '+' : ''}
                                        {in_out === "1" ? from_number : to_number}
                                    </div>
                                    <div className='wdth_214 callsList_item__source'>
                                        {contact_company}
                                    </div>
                                    <Record
                                        record={record}
                                        partnership_id={partnership_id}
                                    />
                                    <div className='wdth_89a callsList_item__duration'>
                                        {`${parseInt(time / 60 + '')
                                            .toString()
                                            .padStart(2, '0')}:${(188 % 60)
                                            .toString()
                                            .padStart(2, '0')}`}
                                    </div>
                                </li>
                            )
                        )}
                </ul>
            </div>
        </div>
    )
}

export default Calls
