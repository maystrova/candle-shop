import React from 'react'
import Layout from 'components/layout'

import Router from 'next/router'
import { Header } from 'components/header'
import AdditionalTop from '../components/additionalTop'

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
                    <AdditionalTop />
                    <Header />
                </div>
            }
        />
    )
}

export default Home
