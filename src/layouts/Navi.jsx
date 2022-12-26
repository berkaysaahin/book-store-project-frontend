import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignedIn from './SignedIn'
import SignedOut from './SignedOut'



export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  
  const navigate = useNavigate()
  
  function handleSignOut() {
    setIsAuthenticated(false)
    navigate("/");
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }
  return (
    <div>
      <Menu inverted fixed='top'>
        <Container>
          <Menu.Item
          as = {NavLink} to = "/"
            name='Home'
          />
          <Menu.Item
            name='messages'
          />
          <Menu.Menu position='right'>
            <CartSummary />
            {isAuthenticated ? <SignedIn signOut = {handleSignOut}/> : <SignedOut signIn ={handleSignIn}/>}
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  )
}
//2:21
