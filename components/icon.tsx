import React from 'react'

import styles from 'styles/icon.module.scss'

export enum ICON_SIZE {
    SMALL = 'small',
}

interface IconProps {
    src: string
}

const Icon = ({ src }: IconProps) => {
    return (
        <div>
            <img className={styles.icon} src={src} alt='pic' />
        </div>
    )
}

export default Icon
