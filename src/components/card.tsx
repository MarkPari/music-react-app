import React, {FC} from 'react';
import { Song } from '../models/iTunes';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type MediaCardProps = {song:Song }

const MyCard: FC<MediaCardProps> = ({song}) => {

    const {artistName, artworkUrl100, previewUrl, artistId, trackName} = song;
    
    return <Card className='margin' sx={{ maxWidth: 345 }}> 
      <CardMedia
        component="img"
        //height="140"
        image={artworkUrl100}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         artista: {artistName}
         brano: {trackName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <audio controls><source src={previewUrl} type="audio/mpeg" ></source></audio>
        </Typography>
      </CardContent>
      <CardActions>
        <Button>Delete</Button>
        <Button size="small">Add to favourites</Button>
      </CardActions>
    </Card>


}

export default MyCard; 