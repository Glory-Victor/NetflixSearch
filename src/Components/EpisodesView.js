import React from 'react';
import './Card.css';

const EpisodesView = ({ props }) => {
  const { id="", image="", title="", description="", number=0, duration=0, releaseDate="" } = props;

  return (
    <div className="card-container">
        <div className="float-layout">
            <div className="card-image" id={id}>
                <img src={image} alt={title} />
                <div className="card" id={number}>
                    <div className="card-title">{title}</div>
                    <div className="card-desc">
                        {description}
                    </div>
                    <p className="duration">{`Duration: ${duration}`}</p>
                    <p className="release">{`Release: ${releaseDate}`}</p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default EpisodesView;
