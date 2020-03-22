import React from "react";

const MovieContainer = (props) => {
    // console.log(props.movie);
    
  return (
    <React.Fragment>
        <div className="h-40 w-24 text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
        {props.movie.name}
        </div>
    </React.Fragment>
  );
};

export { MovieContainer };
