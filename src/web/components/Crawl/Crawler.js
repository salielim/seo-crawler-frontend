import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { Helmet } from 'react-helmet';

const Crawler = ({ pageTitle, children }) => (
  <Container>
    <Helmet>
      <title>{pageTitle}</title>
    </Helmet>

    <Row>
      <Col sm="12">{children}</Col>
    </Row>
  </Container>
);

Crawler.propTypes = {
  pageTitle: PropTypes.string,
  children: PropTypes.element.isRequired,
};

Crawler.defaultProps = {
  pageTitle: 'React App',
};

export default Crawler;
