import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

function Product({ product }) {

    const navigate = useNavigate()

    return (
        <div style={{ margin: "10px" }}>
            <Card sx={{ maxWidth: 400, height: 575 }}>
                <CardMedia sx={{ maxWidth: 345, alignItems: "center", justifyContent: "center", margin: "0 auto" }} component="img" alt={product.title} height="200" image={product.image} />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ height: "100px", overflow: "hidden" }}>
                        {product.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', height: "150px", overflow: "hidden" }}>
                        {product.description}
                    </Typography>
                    <Typography style={{ textAlign: "center", marginTop: "5px" }} variant="h6" sx={{ color: 'black', height: "25px" }}>
                        {product.price} ₺
                    </Typography>
                </CardContent>
                <CardActions sx={{ alignItems: "center", justifyContent: "center" }}>
                    <Button onClick={() => navigate("/product-details/" + product.id)} size="small">Details</Button>
                </CardActions>
            </Card>
        </div >
    )
}

export default Product