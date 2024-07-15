import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({Info}){

    const Initial_IMG_url="https://images.unsplash.com/photo-1673191898695-8252d409d82c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const Hot_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SG90JTIwV2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1617889963259-a7feede244da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fENvbGQlMjBXZWF0aGVyfGVufDB8fDB8fHww";
    const Rainy_URL="https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UmFpbnklMjBXZWF0aGVyfGVufDB8fDB8fHww";


    return (
        <div className="InfoBox">
            <h2>Wether Info - {Info.Weather }</h2>
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={Info.humidity>80 ? Rainy_URL: (Info.temp>25) ? Hot_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {Info.city} 
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature={Info.temp}&deg;C</p>
                            <p>Humidity={Info.humidity}</p>
                            <p>Minimum Tempreature={Info.tempMin}</p>
                            <p>Maximum Tempreature={Info.tempMax}</p>
                            <p>The Weather Feels Like={Info.feelsLike}&deg;C</p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            

        </div>
    )
}