import React from "react";
import "./MovieCard.css";

const MovieCard = (props) => {
  return (
    <div className="card">
      <div className="poster">
        <img
          src={
            props.poster_path
              ? `https://image.tmdb.org/t/p/w500/${props.poster_path}`
              : "https://images.unsplash.com/photo-1524712245354-2c4e5e7121c0?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt={props.title}
        />
      </div>
      <div className="info">
        <p className="title">{props.title}</p>
        <p className="vote">{props.vote_average}</p>
      </div>

      <div className="overview">
        <h2 className="title_overview">overview</h2>
        <h4 className="over_info">{props.overview}</h4>
      </div>
    </div>
  );
};

export default MovieCard;
