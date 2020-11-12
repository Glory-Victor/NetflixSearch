import React from 'react';
import {useLocation} from 'react-router-dom';
import SeriesView from './SeriesView';

const SeriesContainer = () => {
  const location = useLocation();
  const { props= [] } = location.state;

  return (
    <div>
        { props && props.map((key, index) => <SeriesView key={index} props={key} /> )}
    </div>
  );
}

export default SeriesContainer;
