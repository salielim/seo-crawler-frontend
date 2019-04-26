import React, { Component } from 'react';
import axios from 'axios';
import ReactTable from 'react-table';
import matchSorter from 'match-sorter';
import 'react-table/react-table.css';

const crawlApi = 'https://us-central1-noderite-crawler.cloudfunctions.net/crawl';

class Table extends Component {
  state = {
    crawledData: [],
  };

  componentDidMount() {
    const crawledData = this.state;
    // axios
    //   .post(
    //     crawlApi,
    //     { queueUrl: 'http://books.toscrape.com' },
    //     {
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //     },
    //   )
    //   .then(response => response.data)
    //   .then((data) => {
    //     this.setState({ crawledData: data.data });
    //   })
    //   .catch((error) => {
    //     console.log('error: ', error);
    //   });
    this.setState({
      crawledData: [
        {
          url: 'http://books.toscrape.com/',
          title: '\n    All products | Books to Scrape - Sandbox\n',
          h1: 'All products',
          h2: '',
        },
        {
          url: 'http://books.toscrape.com/catalogue/category/books/travel_2/index.html',
          title: '\n    Travel | \n     Books to Scrape - Sandbox\n\n',
          h1: 'Travel',
          h2: '',
        },
        {
          url: 'http://books.toscrape.com/catalogue/category/books/sequential-art_5/index.html',
          title: '\n    Sequential Art | \n     Books to Scrape - Sandbox\n\n',
          h1: 'Sequential Art',
          h2: '',
        },
      ],
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
        {crawledData.length > 0 && (
          <ReactTable
            data={crawledData}
            columns={crawledDataCol}
            filterable
            defaultFilterMethod={(filter, row) => String(row[filter.id]) === filter.value}
          />
        )}
      </div>
    );
  }
}
export default Table;
