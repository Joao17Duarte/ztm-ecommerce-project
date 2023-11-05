import { Fragment, useContext } from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/User.context'
import './Navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)
  console.log(currentUser)
  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/auth'>
              Sign In
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}
export default Navigation
