import Head from 'next/head'

import React from 'react'
import Layout from 'components/layout'

interface HomeProps {}

const Home = ({}: HomeProps) => {
    return (
        <Layout
            children={
                <div>
                    <Head>
                        <title>Askka</title>
                        <link rel='icon' href='/candle-favicon.svg' />
                    </Head>
                    <h1>Askka</h1>
                </div>
            }
        />
    )
}

export default Home
