import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles({
  root: {
    backgroundColor: '#696969'
  },
  search: {
    margin: '0 auto',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  content: {
      textAlign: 'center',
      fontFamily: 'metropolis',
      fontSize: '30px',
      color: '#FF0000',
      display: 'block',
      marginTop: '30px'
  }
});

const Home = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState([]);
  const history = useHistory();
  const classes = useStyles();

  // Check docs for API info under "Search"
  const getData = () => {
    console.log(`Search triggered for ${query}`);
    fetch(`http://api.tvmaze.com/search/shows?q=${query}`)
      .then(response => response.json())
      .then(data => {
        console.log(JSON.stringify(data));
        if (data.length <= 0) {
          return callUnavailablePage();
        }
        data.map(key => {
          const show = key.show;
          // Extracting essential info from the result
          const temp = {
            "id": show.id,
            "image": show.image ? show.image.medium : '',
            "title": show.name,
            "description": show.summary ? show.summary.replace(/<\/?[^>]+(>|$)/g, "") : '',
          }
          result.push(temp);
        });
        // Navigating to the CardContainer component. Path: '/Components/Series/SeriesContainer'
        return history.push({
            pathname: '/series',
            state: { props: result }
        });
      }, (error) => {
        console.log(`Error araised in home page ${error}`);
        callUnavailablePage();
      });
  };

  const callUnavailablePage = () => {
    console.log('Unavailable page triggered from home page');
    history.push({ pathname: '/unavailable'});
  }

  const cancelSearch = () => {
    setTimeout(() => {
      setQuery('');
    }, 500);
  }

  return (
    <div className={classes.root}>
      <title className={classes.content}>Netflix Search</title>
      {/* Ref: https://www.npmjs.com/package/material-ui-search-bar */}
      <SearchBar
        className={classes.search}
        value={query}
        onChange={(value) => setQuery(value)}
        onRequestSearch={() => getData()}
        onCancelSearch={() => cancelSearch()}
      />
    </div>
  );
}

export default Home;
