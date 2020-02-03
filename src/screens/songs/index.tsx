import { Helmet } from "react-helmet";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "reactstrap";

import { fetchSongs } from "../../store/actions";

export const SongsUnconnected = (props: any) => {
  useEffect(() => {
    props.fetchData("http://localhost:3000/songs");
  }, [props]);
  return (
    <div>
      <Helmet>
        <title>Songs</title>
      </Helmet>
      <h2>Songs</h2>
      <p>Songs</p>
      <Button color="danger">Danger!</Button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    songs: state.songs,
    fetchingSongsHasErrored: state.fetchingSongsHasErrored,
    fetchingSongsAreLoading: state.fetchingSongsAreLoading
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    fetchData: (url: string) => dispatch(fetchSongs(url))
  };
};

const Songs = connect(mapStateToProps, mapDispatchToProps)(SongsUnconnected);
export default Songs;
