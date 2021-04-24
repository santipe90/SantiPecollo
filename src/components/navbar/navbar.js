
import { CartWidget } from '../cartwidget/cartwidget'
import './navbar.css'

export const Navbar = () => {
    return (
        <header className='barnav'>
          <CartWidget/>
          <p className='name'>Cresta FM</p>
          </header> 
    )
  }