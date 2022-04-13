const TabImg = (props: any) => (
    <img 
        alt='item' 
        {...props} 
        className='sidebar_tab__img' 
    />
)

const tabs: { [key: string]: JSX.Element } = {
    Итоги: (
        <TabImg
            src={require('../../assets/icons/sidebarIcons/chart.svg').default}
            alt='0'
        />
    ),
    Заказы: (
        <TabImg
            src={require('../../assets/icons/sidebarIcons/orders.svg').default}
            alt='1'
        />
    ),
    Сообщения: (
        <TabImg
            src={require('../../assets/icons/sidebarIcons/mail.svg').default}
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
            src={require('../../assets/icons/sidebarIcons/people.svg').default}
            alt='4'
        />
    ),
    Документы: (
        <TabImg
            src={require('../../assets/icons/sidebarIcons/documents.svg').default}
            alt='5'
        />
    ),
    Исполнители: (
        <TabImg
            src={require('../../assets/icons/sidebarIcons/perm_identity.svg').default}
            alt='6'
        />
    ),
    Отчеты: (
        <TabImg
            src={require('../../assets/icons/sidebarIcons/briefcase.svg').default}
            alt='7'
        />
    ),
    'База знаний': (
        <TabImg
            src={require('../../assets/icons/sidebarIcons/local_library.svg').default}
            alt='8'
        />
    ),
    Настройки: (
        <TabImg
            src={require('../../assets/icons/sidebarIcons/settings.svg').default}
            alt='9'
        />
    ),
}

export default tabs
