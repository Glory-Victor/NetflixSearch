import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { Button } from '@material-ui/core';
import '../Card.css';

const SeriesView = ({ props }) => {
  const { id="", image="", title="", description="" } = props;
  const summary = description.replace(/<\/?[^>]+(>|$)/g, "");
  const [seasonDetail, setSeasonDetail] = useState([]);
  const history = useHistory();

  // Check docs for API info under "Search list view"
  const getDetails = ({ id }) => {
    console.log(`Fetching season info for ${id}`);
    fetch(`http://api.tvmaze.com/shows/${id}/seasons`)
      .then(response => response.json())
      .then(data => {
        if (data.length <= 0) {
          return callUnavailablePage();
        }
        data.forEach(key => {
            const temp = {
                "id": key.id,
                "number": key.number
            }
            seasonDetail.push(temp);
        });
        // Navigating to SeasonView component. Path: "/Component/SeasonView.js"
        return history.push({
            pathname: '/season',
            state: { title, image, seasonDetail, description: summary }
        });
      }, (error) => {
        console.log(`Error araised in card view ${error}`);
        callUnavailablePage();
      });
  }

  const callUnavailablePage = () => {
    console.log('Unavailable page triggered from card view');
    history.push({ pathname: '/unavailable'});
  }

  return (
    <div key={id} className="card-container">
        <div className="float-layout">
            <div className="card-image" id={id}>
                <img src={image} alt={title} />
                <div className="card">
                    <div className="card-title">{title}</div>
                    <div className="card-desc">
                        {summary}
                    </div>
                    {/* Ref: https://material-ui.com/components/buttons/ */}
                    <Button style={{marginLeft: '10px'}} variant="contained" size="small" color="primary" onClick={() => {getDetails({id})}}>
                        Episodes
                    </Button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default SeriesView;
