import React from "react";

const MovieContainer = (props) => {
    // console.log(props.movie);
    
  return (
    <React.Fragment>
      <div className="h-40 w-24 text-gray-700 text-center bg-gray-400 m-2">
        <div className="h-40 w-24" style={{backgroundImage: `url(slices/${props.movie['poster-image']})` }} />
        <div>{props.movie.name}</div>
      </div>
    </React.Fragment>
  );
};

export { MovieContainer };
