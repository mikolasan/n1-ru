import React from "react"
import { Link } from "gatsby"

import * as styles from "./subNav.module.css"

const SubNav = props => {
  const list = <>
    <Link to="/make">Мастерская</Link>
    <Link to="/projects">Проекты</Link>
    <Link to="/gamedev">Игродел</Link>
    <Link to="/ideas">Идеи</Link>
    <Link to="/design">Дизайн</Link>
    <Link to="/youtube">Видео</Link>
  </>

  return <div className={styles.subnav}>
    {list}
  </div>
}

export default SubNav