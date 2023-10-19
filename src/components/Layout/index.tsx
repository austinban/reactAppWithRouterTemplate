import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Header from 'components/Header'
import styles from './index.module.css'

export default function Layout() {
  return (
    <>
      <div className={styles.app}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  )
}
