import React from 'react'
import Layout from 'components/layout'

import Router from 'next/router'
import { Header } from 'components/header'

interface HomeProps {}

const Home = ({}: HomeProps) => {
    const titleClickHandler = () => {
        Router.push('/home')
    }

    const homePageHeadTitle = 'Home Page'

    return (
        <Layout
            headTitle={homePageHeadTitle}
            children={
                <div>
                    <Header />
                </div>
            }
        />
    )
}

export default Home
