import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { Helmet } from 'react-helmet';
import Header from '../UI/Header';
import Footer from '../UI/Footer';
import { Sidebar } from '../UI/Sidebar';

const Template = ({ pageTitle, children }) => (
  <Container>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

    <Header />
    <Container fluid>
      <Row>
        <Sidebar />
        <Col sm="12">
          <br /><br />
          {children}
          <Footer />
        </Col>
      </Row>
    </Container>
    <Header />
  </Container>
);

Template.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Template.defaultProps = {
  pageTitle: 'React App',
};

export default Template;
