import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import Feed from '../../Assets/feed.svg?react'
import Estatisticas from '../../Assets/estatisticas.svg?react'
import Adicionar from '../../Assets/Adicionar.svg?react'
import Sair from '../../Assets/sair.svg?react'

import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'

const UserHeaderNav = () => {
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false)
  const {userLogout} = React.useContext(UserContext)
  const navigate = useNavigate()
  
  const {pathname} = useLocation()

  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  function handleLogout() {
    userLogout()
    navigate('/login')
  }

  return (
    <>
      {mobile && (
        <button
          aria-label='Menu'
          className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
          onClick={() => setMobileMenu(!mobileMenu)}></button>
      )}
      <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
        <NavLink to='/conta' end>
          <Feed />
          {mobile && 'Minhas fotos'}
        </NavLink>
        <NavLink to='/conta/estatisticas'>
          <Estatisticas />
          {mobile && 'Estatísticas'}
        </NavLink>
        <NavLink to='/conta/postar'>
          <Adicionar />
          {mobile && 'Adicionar Foto'}
        </NavLink>
        <button onClick={handleLogout}>
          <Sair />
          {mobile && 'Sair'}
        </button>
      </nav>
    </>
  )
}

export default UserHeaderNav
