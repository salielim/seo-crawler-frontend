import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import matchSorter from 'match-sorter';
import { Spinner } from 'reactstrap';
import 'react-table/react-table.css';

const crawlApi = 'https://us-central1-noderite-crawler.cloudfunctions.net/crawl';

class Table extends Component {
  state = {
    crawledData: [],
  };

  componentDidMount() {
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
        this.setState({ crawledData: data.data });
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }

  render() {
    const { crawledData } = this.state;
    const crawledDataCol = [
      {
        Header: 'url',
        accessor: 'url',
        filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['url'] }),
        filterAll: true,
      },
      {
        Header: 'title',
        accessor: 'title',
        filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['title'] }),
        filterAll: true,
      },
      {
        Header: 'h1',
        accessor: 'h1',
        filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['h1'] }),
        filterAll: true,
      },
      {
        Header: 'h2',
        accessor: 'h2',
        filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ['h2'] }),
        filterAll: true,
      },
    ];
    return (
      <div>
        {crawledData.length > 0 ? (
          <ReactTable
            data={crawledData}
            columns={crawledDataCol}
            filterable
            defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
          />
        ) : <Spinner color="secondary" />}
      </div>
    );
  }
}
export default Table;
