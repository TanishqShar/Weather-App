import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./infobox.css"

export default function InfoBox({info}) {
  const HOT_URL = "https://images.unsplash.com/photo-1717361281385-c915cc0fe9cc?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const COLD_URL="https://plus.unsplash.com/premium_photo-1675149685131-7412c1187810?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  const RAIN_URL="https://images.unsplash.com/photo-1501691223387-dd0500403074?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <div style={{textAlign:"center"}}>
      
      <div className='container'>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}

          image={
            info.humidity>70?RAIN_URL:info.temp>23?HOT_URL:COLD_URL
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Minimum Temperature = {info.temp_min}&deg;C</p>
            <p>Maximum Temperature = {info.temp_max}&deg;C</p>
            <p>Feels like = {info.feelslike}&deg;C</p>
            <p>Humidity = {info.humidity}</p>
            <p>Weather = {info.weather}</p>
          </Typography>
        </CardContent>
        
      </Card>
      </div>
    </div>
  );
}
