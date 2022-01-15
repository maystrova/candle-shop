import styles from './layout.module.scss'

interface LayoutProps {
    children: React.ReactChild
}

const Layout = ({ children }: LayoutProps) => {
    return <div className={styles.container}>{children}</div>
}

export default Layout
