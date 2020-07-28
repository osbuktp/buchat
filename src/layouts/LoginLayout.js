import React from 'react'
import styles from './LoginLayout.module.scss'
export default function LoginLayout({ children }) {
    return <div className={styles.layout}>
        {children}
    </div>
}