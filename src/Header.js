/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


function Header() {
  const [{cart,user}, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  }
  return (
    <div className='header'>
      <Link to="/">
        <img className="header--logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon" />
      </Link>

      <div className="header--search">
        <input className="header--searchInput" type="text" />
        {/*Material UI*/}
        <SearchIcon className="header--searchIcon" />
      </div>

      <div className="header--nav">
        <Link to = {!user && '/login'}> 
        <div onClick={handleAuthentication} className="header--option">
          <span className="header--optionLineOne">Hello {!user ? 'Guest' : user.email} </span>
          <span className="header--optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
        </div>
         </Link>

        <div className="header--option">
          <span className="header--optionLineOne">Returns</span>
          <span className="header--optionLineTwo">& Order</span>
        </div>
        <div className="header--option">
          <span className="header--optionLineOne">Your</span>
          <span className="header--optionLineTwo">Prime</span>
        </div>
      </div>

      <Link to="/checkout">
        <div className="header--optionBasket">
          <ShoppingCartOutlinedIcon />
          <span className="header--optionLineTwo header--basketCount">{cart?.length}</span>
        </div>
      </Link>
   </div>
  )
}

export default Header


