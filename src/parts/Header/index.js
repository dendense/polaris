import React, { useState } from "react";
import { UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
import "./index.scss";

import IconText from "parts/IconText";
import Button from "elements/Button";

export default function Header(props) {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const toggle = () => setPopoverOpen(!popoverOpen);

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="d-flex">
        <button type="button" id="sidebarCollapse" className="btn mr-1">
          <i className="fas fa-align-left text-white"></i>
        </button>
        <span className="navbar-brand">
          <IconText className="icontext-sm text-white" />
        </span>
      </div>
      <div className="btn-group" role="group" aria-label="Right Header Panel">
        <Button type="button" className="btn btn-sm" href="#">
          <img src="/images/ava1.jpg" alt="Avatar" className="avatar"></img>
        </Button>
        <Button type="button" className="btn btn-sm">
          <i className="far fa-envelope fa-lg text-white"></i>
        </Button>
        <Button type="button" className="btn btn-sm" id="Popover1">
          <i class="fas fa-cog fa-lg text-white"></i>
        </Button>
      </div>
      <UncontrolledPopover
        trigger="legacy"
        placement="bottom"
        isOpen={popoverOpen}
        target="Popover1"
        toggle={toggle}
      >
        <PopoverHeader>
          <Button type="button" className="btn btn-sm">
            <i class="fas fa-cog"></i> General Settings
          </Button>
        </PopoverHeader>
        <PopoverHeader>
          <Button type="button" className="btn btn-sm">
            <i class="fas fa-flag"></i> Saved Posts
          </Button>
        </PopoverHeader>
        <PopoverHeader>
          <Button type="button" className="btn btn-sm">
            <i class="fas fa-heart"></i> Liked Posts
          </Button>
        </PopoverHeader>
        <PopoverHeader>
          <Button type="button" className="btn btn-sm">
            <i class="fas fa-question-circle"></i> Help
          </Button>
        </PopoverHeader>
        <PopoverHeader>
          <Button type="button" className="btn btn-sm">
            <i class="fas fa-sign-out-alt"></i> Logout
          </Button>
        </PopoverHeader>
      </UncontrolledPopover>
    </nav>
  );
}
