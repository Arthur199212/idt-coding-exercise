import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography
} from '@material-ui/core'
import { Rating } from '@material-ui/lab'
import { ReviewDialog } from './ReviewDialog'

const useStyles = makeStyles({
  actions: {
    display: 'flex',
    justifyContent: 'center'
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  root: {
    margin: '0.5rem',
    width: 270
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  }
})

type ProductCardProps = {
  description: string
  id: string
  name: string
  rating: number
  thumbnail: string
}

export const ProductCard = ({ description, id, name, rating, thumbnail }: ProductCardProps) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={thumbnail} title={name} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {name}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description}
          </Typography>
        </CardContent>
        <CardContent className={classes.content}>
          <Rating name='read-only' value={rating} readOnly />
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <ReviewDialog productId={id} />
      </CardActions>
    </Card>
  )
}
