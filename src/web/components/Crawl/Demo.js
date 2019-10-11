import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

import Table from './Table';

class Demo extends Component {
  state = {
    showTable: false,
    domainUrl: '',
    domainUrlSubmitted: '',
  };

  componentDidMount() {
    // axios here
  }

  handleSubmit = e => {
    const { domainUrl } = this.state;
    e.preventDefault();
    this.setState({ showTable: true });
    if (domainUrl) {
      this.setState({ domainUrlSubmitted: domainUrl });
    } else {
      this.setState({ domainUrlSubmitted: 'http://books.toscrape.com' });
    }
  };

  handleDomainUrlChange = e => {
    this.setState({ domainUrl: e.target.value });
    console.log(this.state.domainUrl);
  };

  render() {
    const { showTable, domainUrlSubmitted } = this.state;
    return (
      <Container>
        <Helmet>
          <title>Try the Crawler</title>
        </Helmet>
        <h3>Try the Crawler</h3>
        <p>
          This demo shows the first 20 results of the crawl.
          <br />
          Enter the domain URL you'd like to crawl 
          {/* and sign up to our updates (no spam ever, we promise). */}
        </p>
        <Form inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              Domain URL
            </Label>
            <Input
              type="domainUrl"
              name="domainUrl"
              id="domainUrl"
              placeholder="http://books.toscrape.com"
              defaultValue="http://books.toscrape.com"
              size="50"
              onChange={this.handleDomainUrlChange}
            />
          </FormGroup>
          {/* <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="exampleEmail" className="mr-sm-2">
              Email
            </Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="contact@company.com"
            />
          </FormGroup> */}
          <Button onClick={this.handleSubmit}>Submit</Button>
        </Form>
        <div>{showTable && <Table domainUrl={domainUrlSubmitted} />}</div>
      </Container>
    );
  }
}
export default Demo;
