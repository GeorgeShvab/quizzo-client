import { FC, ReactElement } from 'react'
import './style.css'

interface Props {
  children: ReactElement
}

const Layout: FC<Props> = ({ children }) => {
  return <main className="layout">{children}</main>
}

export default Layout
