import { useQuery } from 'react-query'
import { Container, Paper, Typography } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { ProductCard } from '@src/components'
import { getProducts } from '@src/api'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: '1rem',
      padding: '2rem',
      display: 'flex',
      flexWrap: 'wrap'
    },
    title: {
      width: '100%'
    }
  })
)

export const Home = () => {
  const { data: products } = useQuery('products', getProducts)
  const classes = useStyles()

  return (
    <Container maxWidth='lg'>
      <Paper className={classes.root}>
        <Typography variant='h4' gutterBottom className={classes.title}>
          IDT Coding Exercise
        </Typography>
        {products && products.map((data: any) => <ProductCard key={data.id} {...data} />)}
      </Paper>
    </Container>
  )
}
