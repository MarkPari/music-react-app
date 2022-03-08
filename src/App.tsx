import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { api } from './api/iTunesApi';
import { Song } from './models/iTunes';
import { Grid, TextField, Button } from '@mui/material';
import MyCard from './components/card';

function App() {
  const [data, setData] = useState<Song[]>();
  const [search, setSearch] = useState<string>("QUEEN");
  const [myClick, setmyClick] = useState<string>("");
  
  const music = (term: string) => fetch(`https://itunes.apple.com/search?term=${term}`).then((res)=> res.json())
  .then(res=> setData(res.results));

  useEffect(()=>{
    music(search);
  }, [search])
  
  return (<>
    <TextField onChange={event => setmyClick(event.target.value)} id="outlined-basic" label="search" variant="outlined" />
    <Button variant="contained" onClick={()=>setSearch(myClick)}>Search</Button>
    <Grid container spacing={2}>
    {data && data.map(song=> {
    return (<Grid key={song.trackId} item xs={6} md={4}>
        <MyCard song={song}/>
      </Grid>) 
  })}
    </Grid>
  </>);
}

export default App;
