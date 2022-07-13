import { PencilLine } from "phosphor-react"
import { Avatar } from "./Avatar"

import styles from "./Sidebar.module.css"

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
        alt="Imagem de background do usuário" 
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/victorcbb.png" alt="Imagem do perfil do usuário" />

        <strong>Victor Barros</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </div>
  )
}