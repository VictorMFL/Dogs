import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {UserContext} from '../../UserContext'
import FeedSvg from '../../Assets/FeedSvg'
import EstatisticasSvg from '../../Assets/EstatisticasSvg'
import AdicionarSvg from '../../Assets/AdicioarSvg'
import SairSvg from '../../Assets/SairSvg'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'

const UserHeaderNav = () => {
  const {userLogout} = React.useContext(UserContext)
  const mobile = useMedia('(max-width: 40rem)')
  const [mobileMenu, setMobileMenu] = React.useState(false)

  const {pathname} = useLocation()
  React.useEffect(() => {
    setMobileMenu(false)
  }, [pathname])

  return (
    <>
        {mobile && 
            <button 
                aria-label='Menu'
                onClick={() => setMobileMenu(!mobileMenu)}
                className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
                >
                    
            </button>
        }
        <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
            <NavLink to='/conta' end>
                {mobile && 'Minhas fotos'}
                <FeedSvg />
            </NavLink>
            <NavLink to='/conta/estatisticas'>
                {mobile && 'Estatisticas'}
                <EstatisticasSvg />
            </NavLink>
            <NavLink to='/conta/postar' >
                {mobile && 'Adicionar Foto'}
                <AdicionarSvg />
            </NavLink>
            <button onClick={userLogout}>
                <SairSvg />
                {mobile && 'Sair'}
            </button>
        </nav>
    </>
  )
}

export default UserHeaderNav
