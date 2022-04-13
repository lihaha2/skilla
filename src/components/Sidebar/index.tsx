import classNames from 'classnames'
import './sidebar.css'
import tabs from './src'

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='sidebar_content'>
                <a href='#' className='sidebar_content__logowrapper'>
                    <img
                        className='sidebar_logo'
                        src={require('../../assets/logo/logo.svg').default}
                        alt='logo'
                    />
                </a>
                <ul>
                    {Object.keys(tabs).map((tabName: string, key) => (
                        <li
                            className={classNames(
                                'sidebar_list__item',
                                key === 3 ? 'sidebar_list__item--active' : null
                            )}
                            key={key}
                        >
                            {tabs[tabName]}
                            {tabName}
                        </li>
                    ))}
                </ul>
                <div className='sidebar_buttonsgroup' >
                    <button className='buttonsgroup_item'>
                        Добавить заказ{' '}
                        <img
                            className='buttonsgroup_item__img'
                            src={require('../../assets/icons/sidebarIcons/plusButton.svg').default}
                            alt='add'
                        />
                    </button>
                    <button className='buttonsgroup_item'>
                        Оплата{' '}
                        <img
                            className='buttonsgroup_item__img'
                            style={{marginLeft: 11}}
                            src={require('../../assets/icons/sidebarIcons/infoButton.svg').default}
                            alt='add'
                        />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
// 1293710
