import React from "react"
import { Link } from "gatsby"

import LogoButton from "../logoButton"
import Search from "../search"
import * as styles from "../navigationBar.module.css"

const searchIndices = [{ name: `n1_ru`, title: `Pages` }]

const RuNav = ({ active }) => (
  <nav className={["topnav", "language-ru", styles.topnav].join(' ')}>
    <Link to="/" { ...(active === "root" && { className: [styles.activelink, styles.toplogo].join(' ') } || { className: styles.toplogo }) }>
      <LogoButton style={styles.toplogo} />
    </Link>
    <Link to="/neural-networks" { ...(active === "neural-networks" && { className: styles.activelink }) }>Наука</Link>
    <Link to="/devlog" { ...(active === "devlog" && { className: styles.activelink }) }>Девлог</Link>
    <div className={[styles.featuredlink, styles.tooltip].join(' ')}>
      <Link to="/make/hydroponics" { ...(active === "hydroponics" && { className: styles.activelink }) }>
        <img src="/hydroponics.png" alt="Гидропоника" title="" />
        <span className={styles.tooltiptext}>Гидропоника</span>
      </Link>
    </div>
    <div className={[styles.featuredlink, styles.tooltip].join(' ')}>
      <Link to="/make" { ...(active === "make" && { className: styles.activelink }) }>
        <img src="/make.png" alt="Мастерская" title="Мастерская" />
        <span className={styles.tooltiptext}>Мастерская</span>
      </Link>
    </div>
    <Link to="/blog" { ...(active === "blog" && { className: styles.activelink }) }>Блог</Link>

    <Search language="ru" indices={searchIndices} />
  </nav>
)

export default RuNav;