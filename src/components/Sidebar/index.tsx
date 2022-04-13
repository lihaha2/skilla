import './sidebar.css'
const TabImg = (props: any) => (
    <img alt='item' {...props} className='sidebar_tab__img' />
)

const tabs: any = {
    Итоги: (
        <TabImg
            src={require('../../assets/icons/sidebarIcons/calls.svg').default}
            alt='0'
        />
    ),
    Заказы: (
        <TabImg
            src={require('../../assets/icons/sidebarIcons/calls.svg').default}
            alt='1'
        />
    ),
    Сообщения: (
        <TabImg
            src={require('../../assets/icons/sidebarIcons/calls.svg').default}
            alt='2'
        />
    ),
    Звонки: (
        <TabImg
            src={require('../../assets/icons/sidebarIcons/calls.svg').default}
            alt='3'
        />
    ),
    Контрагенты: (
        <TabImg
            src={require('../../assets/icons/sidebarIcons/calls.svg').default}
            alt='4'
        />
    ),
    Документы: (
        <TabImg
            src={require('../../assets/icons/sidebarIcons/calls.svg').default}
            alt='5'
        />
    ),
    Исполнители: (
        <TabImg
            src={require('../../assets/icons/sidebarIcons/calls.svg').default}
            alt='6'
        />
    ),
    Отчеты: (
        <TabImg
            src={require('../../assets/icons/sidebarIcons/calls.svg').default}
            alt='7'
        />
    ),
    'База знаний': (
        <TabImg
            src={require('../../assets/icons/sidebarIcons/calls.svg').default}
            alt='8'
        />
    ),
    Настройки: (
        <TabImg
            src={require('../../assets/icons/sidebarIcons/calls.svg').default}
            alt='9'
        />
    ),
}

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar_content'>
                <div className='sidebar_content__logowrapper'>
                    <img className='sidebar_logo' src={require('../../assets/logo/logo.svg').default} alt='logo' />
                </div>
                <ul>
                    {Object.keys(tabs).map((tabName: string, key) => (
                        <li key={key}>
                            {tabs[tabName]}
                            {tabName}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
// 1293710
