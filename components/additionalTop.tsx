import React from 'react'

import styles from 'styles/additionalTop.module.scss'

interface AdditionalTopProps {}

const AdditionalTop = ({}: AdditionalTopProps) => {
    return (
        <div className={styles.addTop}>
            <span>maystrovakate@gmail.com</span>
            <span>Receive 10% off & free shipping on orders over 50$</span>
            <button>
                <span>My account</span>
            </button>
        </div>
    )
}

export default AdditionalTop
