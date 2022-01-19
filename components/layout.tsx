import React from 'react'
import styles from '../styles/layout.module.scss'
import Head from 'next/head'

interface LayoutProps {
    children: React.ReactChild
    headTitle: string
}

const Layout = ({ children, headTitle }: LayoutProps) => {
    return (
        <div className={styles.container}>
            <Head>
                <title>{headTitle} | Askka</title>
                <link rel='icon' href='/candle-favicon.svg' />
            </Head>
            <main>{children}</main>
        </div>
    )
}

export default Layout
