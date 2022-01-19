import 'styles/global.scss'

interface AppProps {
    Component: any
    pageProps: any
}

export default function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}
