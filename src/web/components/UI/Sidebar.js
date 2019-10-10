/* global window */
import React from 'react';
import { Col, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const SidebarNavItems = () => (
  <div>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname === '/' && 'active'}`} to="/">
        <i className="icon-home" />
        {' '}
        <span>Learn more</span>
      </Link>
    </NavItem>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname.startsWith('/crawl') && 'active'}`} to="/crawl">
        <i className="icon-magic-wand" />
        {' '}
        <span>Try now</span>
      </Link>
    </NavItem>
    <NavItem>
      <Link className={`nav-link ${window.location.pathname.startsWith('/pricing') && 'active'}`} to="/pricing">
        <i className="icon-magic-wand" />
        {' '}
        <span>Pricing</span>
      </Link>
    </NavItem>
  </div>
);

const Sidebar = () => (
  <div>
    <Col sm="3" md="2" className="d-none d-sm-block sidebar">
      <Nav vertical>
        {SidebarNavItems()}
      </Nav>
    </Col>
  </div>
);

export { Sidebar, SidebarNavItems };
