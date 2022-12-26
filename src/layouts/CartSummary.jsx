import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownDivider } from 'semantic-ui-react'


export default function CartSummary() {
  return (
    <div>
      <Dropdown item text='Your Cart'>
      <Dropdown.Menu>
        <Dropdown.Item>Acer</Dropdown.Item>
        <Dropdown.Item>Asus</Dropdown.Item>
        <Dropdown.Item>Annen</Dropdown.Item>
        <DropdownDivider/>
        <Dropdown.Item as = {NavLink} to = "/cart">Go To Cart</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    </div>
  )
}
