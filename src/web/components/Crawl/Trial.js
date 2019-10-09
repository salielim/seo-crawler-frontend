import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'reactstrap';

import Table from './Table';

const Trial = () => (
  <Container>
    <Helmet>
      <title>Try the Crawler</title>
    </Helmet>
    <h3>Try the Crawler</h3>
    <Table />
  </Container>
);

export default Trial;
