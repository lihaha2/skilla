import './header.css'

const headerData = {
    calls: {
        current: 20,
        max: 30,
    },
    quality: 40,
    conversion: 67,
}

const {
    calls: { current, max },
    quality,
    conversion,
} = headerData

const AnaliticBar = ({
    current=30,
    max=100,
    currentColor='#28A879',
}: {
    [key: string]: any
}) => {
    return (
        <div className='bar'>
            <div
                className='bar_current'
                style={{
                    width: `${(current / max) * 100}%`,
                    backgroundColor: currentColor,
                }}
            />
            <div
                className='bar_max'
                style={{ width: `${((max - current) / max) * 100}%` }}
            />
        </div>
    )
}

const CallsHeader = () => {
    return (
        <div className='header'>
            <div className='flex_center header_leftSide'>
                <div className='leftSide_date'>Среда, 13 окт</div>
                <div className='barWrapper'>
                    <div className='bar_label'>Новые звонки <span style={{color: '#28A879'}}>{current} из {max} шт</span></div>
                    <AnaliticBar current={current} max={max}  />
                </div>
                <div className='barWrapper'>
                    <div className='bar_label'>Качество разговоров <span style={{color: '#FFD500'}}>{quality}%</span></div>
                    <AnaliticBar current={quality} currentColor={'#FFD500'}  />
                </div>
                <div className='barWrapper'>
                    <div className='bar_label'>Конверсия в заказ <span style={{color: '#EA1A4F'}}>{conversion}%</span></div>
                    <AnaliticBar current={conversion} currentColor={'#EA1A4F'}  />
                </div>
            </div>
            <div className='flex_center header_rightSide'>
                <button className="searchWrapper">
                    <img src={require('../../assets/icons/header_icons/search.svg').default} alt="search" />
                </button>
                <button className='flex_center rightSide_companyWrapper'>
                    <p>ИП Сидорова Александра Михайловна</p>
                    <div className="searchWrapper">
                        <img src={require('../../assets/icons/header_icons/arrow_down.svg').default} alt="^" />
                    </div>
                </button>
                <button className='flex_center rightSide_profileWrapper'>
                    <div className="flex_center profileWrapper">
                        <img src={require('../../assets/defaultImages/profile.png').default} alt="^" />
                    </div>
                    <div className="searchWrapper">
                        <img src={require('../../assets/icons/header_icons/arrow_down.svg').default} alt="^" />
                    </div>
                </button>
            </div>
        </div>
    )
}

export default CallsHeader
