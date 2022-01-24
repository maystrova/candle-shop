import React from 'react'

import { HeaderMenuType, HeaderUserActionMenu } from 'services/type'
import Icon from 'components/icon'

import styles from 'styles/header.module.scss'

import wishlistIcon from 'components/icons/favourite.svg'
import cartIcon from 'components/icons/cart.svg'
import searchIcon from 'components/icons/search.svg'
import menuIcon from 'components/icons/menu.svg'

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
    const HEADER_MENU: HeaderMenuType[] = [
        { title: 'Home', id: 1, onClick: () => {} },
        { title: 'Pages', id: 2, onClick: () => {} },
        { title: 'Shop', id: 3, onClick: () => {} },
        { title: 'Portfolio', id: 4, onClick: () => {} },
    ]

    const USER_ACTION_MENU: HeaderUserActionMenu[] = [
        { icon: wishlistIcon, id: 1, quantity: 0, onClick: () => {} },
        { icon: cartIcon, id: 2, quantity: 0, onClick: () => {} },
        { icon: searchIcon, id: 3, onClick: () => {} },
        { icon: menuIcon, id: 4, onClick: () => {} },
    ]

    return (
        <div className={styles.header}>
            <ul className={styles.header__menu}>
                {HEADER_MENU.map(item => {
                    return (
                        <li key={item.id} onClick={item.onClick}>
                            {item.title}
                        </li>
                    )
                })}
            </ul>
            <div>
                <h1>Askka</h1>
                <div>
                    Handmade candles <br /> est. 1970.
                </div>
            </div>
            <div>
                {USER_ACTION_MENU.map(item => {
                    return (
                        <button onClick={item.onClick} key={item.id}>
                            <Icon src={item.icon} />
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

export { Header }
