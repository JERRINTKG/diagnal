import React from "react";

const MovieContainer = (props) => {
    // console.log(props.movie);
    
  return (
    <React.Fragment>
      <div className="h-40 w-full">
        <div className="h-full w-full bg-no-repeat" style={{backgroundImage: `url(slices/${props.movie['poster-image']})` }} />
        <div className="py-1 text-sm text-gray-500">{props.movie.name}</div>
      </div>
    </React.Fragment>
  );
};

export { MovieContainer };
