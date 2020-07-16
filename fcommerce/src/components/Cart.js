import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Example = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        Cart
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Some Action</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Go to cart</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

export default Example;