import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import matchSorter from 'match-sorter';
import { Spinner } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'react-table/react-table.css';

const crawlApi =
  'https://us-central1-noderite-crawler.cloudfunctions.net/crawl-demo-dev ';

class Table extends Component {
  state = {
    crawledData: [],
  };

  componentDidMount() {
    const { domainUrl } = this.props;
    axios
      .post(
        crawlApi,
        { queueUrl: domainUrl },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then(response => response.data)
      .then(data => {
        this.setState({ crawledData: data.data });
      })
      .catch(error => {
        console.log('error: ', error);
      });
  }

  render() {
    const { crawledData } = this.state;
    const { domainUrl } = this.props;

    const crawledDataCol = [
      {
        Header: 'URL',
        accessor: 'url',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['url'] }),
        filterAll: true,
      },
      {
        Header: 'Title',
        accessor: 'title',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['title'] }),
        filterAll: true,
      },
      {
        Header: 'H1',
        accessor: 'h1',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['h1'] }),
        filterAll: true,
      },
      {
        Header: 'H2',
        accessor: 'h2',
        filterMethod: (filter, rows) =>
          matchSorter(rows, filter.value, { keys: ['h2'] }),
        filterAll: true,
      },
    ];
    return (
      <div>
        {crawledData.length > 0 ? (
          <div>
            <br />
            <br />
            Showing the first 20 results, check out our&nbsp;
            <Link to="pricing" target="_blank">
              pricing
            </Link>{' '}
            page if you would like to crawl more results.
            <br />
            <ReactTable
              data={crawledData}
              columns={crawledDataCol}
              filterable
              defaultFilterMethod={(filter, row) =>
                String(row[filter.id]) === filter.value
              }
            />
          </div>
        ) : (
          <div>
            <br />
            <br />
            Now crawling <b>{domainUrl}</b>, this should take a few minutes.
            <br />
            <Spinner color="secondary" />
          </div>
        )}
      </div>
    );
  }
}
export default Table;
