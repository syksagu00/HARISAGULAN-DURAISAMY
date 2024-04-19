import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function EventCard({event}) {
 
  const navigate = useNavigate();

  return (
    <Card sx={{ width: 300 }} >
      <CardMedia
        component="img"
        alt={event.name}
        width="300"
        height="140"
        image={event.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {event.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Duration:{event.duration}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{navigate("/display-event",{state:event})}}>View</Button>
        <Button size="small" onClick={()=>{navigate("/edit-event",{state:event})}}>Edit</Button>
      </CardActions>
    </Card>
  );
}

export default EventCard;