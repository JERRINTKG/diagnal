import React, { Component } from "react";
import { globalConstants } from "config/globalConstants";

const getMoviesList = () => {
  return new Promise((resolve, reject) => {
    fetch(globalConstants.endPonits.moviesList)
      .then(response => {
        resolve(response.json());
      })
      .then(data => {
        reject(data);
      });
  });
};

export { getMoviesList };
