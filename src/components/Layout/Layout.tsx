import { ReactNode } from "react"
import style from "./Layout.module.css"

type LayoutProps = {
   children: ReactNode
}

export default function Layout({children}:LayoutProps) {
   return (
      <div className={style.index}>
         {children}
      </div>
   )
}