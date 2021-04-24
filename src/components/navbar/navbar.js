
import { CartWidget } from '../cartwidget/cartwidget'
import '../cartwidget/cartwidget.css'
import './navbar.css'

export const Navbar = () => {
    return (
        <header className='barnav'>
          <CartWidget/>
          <p className='name'>Cresta FM</p>
          </header> 
    )
  }