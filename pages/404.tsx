import React from 'react'
import Layout from 'components/layout'
import Link from 'next/link'

interface ErrorPageProps {}

const ErrorPage = ({}: ErrorPageProps) => {
    const headTitle = 'Error'

    return (
        <Layout headTitle={headTitle}>
            <main>
                <div>This page does not exist!</div>
                <div>
                    <span>Go to</span>
                    <Link href='/'>
                        <a>Home Page</a>
                    </Link>
                </div>
            </main>
        </Layout>
    )
}

export default ErrorPage
