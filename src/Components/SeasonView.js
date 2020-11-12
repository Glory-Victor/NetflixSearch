import React, { useEffect, useState } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import './Card.css';
import EpisodesView from './EpisodesView';
import { MenuItem, Button, Menu } from '@material-ui/core';

const SeasonView = () => {

  const location = useLocation();
  const { title= "", image= "", description= "", seasonDetail= [] } = location.state;
  const [episodeDetail, setEpisodeDetail] = useState([]);
  const history = useHistory();
  const [showEpisode, setShowEpisode] = useState(false);
  const [dropDown, setDropDown] = useState(null);

  useEffect(() => {
    getDetails({id: location.state.seasonDetail[0].id });
  }, [location])

  const getDetails = ({ id }) => {
    console.log(`Fetching episode info for ${id}`);
    fetch(`http://api.tvmaze.com/seasons/${id}/episodes`)
      .then(response => response.json())
      .then(data => {
        if (data.length <= 0) {
          return callUnavailablePage();
        }
        episodeDetail.length = 0;
        data.forEach(key => {
            const description = key.summary ? key.summary.replace(/<\/?[^>]+(>|$)/g, "") : '';
            const temp = {
                "id": key.id,
                "image": key.image ? key.image.medium : image,
                "number": key.number,
                "title": key.name,
                "description": description,
                "duration": key.runtime,
                "releaseDate": key.airdate
            }
            episodeDetail.push(temp);
        });
        setTimeout(() => {
          // Enabling the episode view
          setShowEpisode(true);
        }, 500);
      }, (error) => {
        console.log(`Error araised in season view ${error}`);
        callUnavailablePage();
      });
  }

  const callUnavailablePage = () => {
    console.log('Unavailable page triggered from season view');
    history.push({ pathname: '/unavailable'});
  }

  return (
    <div className="card-container">
        <div className="float-layout">
            <div className="card-image">
                <img src={image} alt={title} />
                <div className="card">
                    <div className="card-title">{title}</div>
                    <div className="card-desc">
                        {description}
                    </div>
                    <div>
                      <Button style={{marginLeft: '10px'}} variant="contained" size="medium" color="primary" aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => {setDropDown(event.currentTarget)}}>
                        Seasons
                      </Button>
                      <Menu
                        id="simple-menu"
                        anchorEl={dropDown}
                        keepMounted
                        open={Boolean(dropDown)}
                        onClose={() => {setDropDown(false)}}
                      >
                        { seasonDetail && seasonDetail.map((key) => (
                          <MenuItem key={key.id} onClick={() => { setDropDown(false); setShowEpisode(false); getDetails({ id: key.id }); }}>{`Season ${key.number}`}</MenuItem>
                        ))}
                      </Menu>
                    </div>
                    {showEpisode && episodeDetail && episodeDetail.map((key, index) => <EpisodesView key={index} props={key} />)}
                </div>
            </div>
        </div>
    </div>
  );
}

export default SeasonView;
