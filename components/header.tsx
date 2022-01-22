import React from 'react'

import { HeaderMenuType } from 'services/type'

import styles from 'styles/header.module.scss'

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
    const HEADER_MENU: HeaderMenuType[] = [
        { title: 'Home', id: 1, onClick: () => {} },
        { title: 'Pages', id: 2, onClick: () => {} },
        { title: 'Shop', id: 3, onClick: () => {} },
        { title: 'Portfolio', id: 4, onClick: () => {} },
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
        </div>
    )
}

export { Header }
