import React from 'react'
import Layout from 'components/layout'

import Router from 'next/router'

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
                    <nav>
                        <h1 onClick={titleClickHandler}>Askka</h1>
                    </nav>
                </div>
            }
        />
    )
}

export default Home
