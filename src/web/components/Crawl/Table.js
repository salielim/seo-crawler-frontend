import React, { Component } from 'react';
import axios from 'axios';

const crawlApi = 'https://us-central1-noderite-crawler.cloudfunctions.net/crawl';

class Table extends Component {
  state = {
    crawledData: [],
  };

  componentDidMount() {
    const crawledData = this.state;
    axios
      .post(
        crawlApi,
        { queueUrl: 'http://books.toscrape.com' },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then(response => response.data)
      .then((data) => {
        this.setState({ crawledData: data });
        console.log(crawledData);
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }

  render() {
    const crawledData = this.state;
    return (
      <div>
        testing
        {JSON.stringify(crawledData)}
      </div>
    );
  }
}
export default Table;
