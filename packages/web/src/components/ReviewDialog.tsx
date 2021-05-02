import { useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import Button from '@material-ui/core/Button'
import {
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Rating } from '@material-ui/lab'
import { addReview, ReviewData } from '@src/api'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '300px',
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch'
      }
    },
    textField: {
      width: '260px'
    },
    rating: {
      width: 'auto'
    }
  })
)

const ONE_HUNDRED_MS = 100

type ReviewDialogProps = {
  productId: string
}

export const ReviewDialog = ({ productId }: ReviewDialogProps) => {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [rating, setRating] = useState<number | null>(0)
  const [text, setText] = useState('')
  const classes = useStyles()
  const queryClient = useQueryClient()
  const mutation = useMutation<void, Error, ReviewData>(
    (newReview: ReviewData) => addReview(newReview),
    {
      onSuccess: () => queryClient.invalidateQueries('products')
    }
  )

  const resetState = () => {
    setRating(0)
    setName('')
    setText('')
    mutation.reset()
  }

  const handleClose = () => {
    setOpen(false)
    // timeout is to reset state values after animation of Dialog closing is done
    setTimeout(() => resetState(), ONE_HUNDRED_MS)
  }

  const handleSubmit = async () => mutation.mutate({ name, productId, rating, text })

  return (
    <div>
      <Button size='small' color='primary' onClick={() => setOpen(true)}>
        Add Review
      </Button>
      <Dialog open={open} onClose={handleClose}>
        {mutation.isLoading && (
          <DialogContent>
            <CircularProgress />
          </DialogContent>
        )}
        {mutation.isIdle && (
          <>
            <DialogTitle>Add Review</DialogTitle>
            <DialogContent>
              <form className={classes.root} noValidate autoComplete='off'>
                <TextField
                  label='Your Name'
                  className={classes.textField}
                  value={name}
                  onChange={({ target }) => setName(target.value)}
                />
                <TextField
                  label='Review Text'
                  multiline
                  rows={4}
                  className={classes.textField}
                  value={text}
                  onChange={({ target }) => setText(target.value)}
                />
                <Rating
                  className={classes.rating}
                  name='read-only'
                  value={rating}
                  onChange={(event, newValue) => setRating(newValue)}
                />
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='primary'>
                Cancel
              </Button>
              <Button onClick={handleSubmit} color='primary' autoFocus>
                Submit
              </Button>
            </DialogActions>
          </>
        )}
        {mutation.isSuccess && (
          <>
            <DialogTitle>Success 👌</DialogTitle>
            <DialogActions>
              <Button onClick={handleClose} color='primary'>
                Close
              </Button>
            </DialogActions>
          </>
        )}
        {mutation.isError && (
          <>
            <DialogTitle>🤔 Error</DialogTitle>
            <DialogContent>
              <DialogContentText>
                {mutation.error?.message || 'Something went wrong'}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color='primary'>
                Close
              </Button>
              <Button onClick={resetState} color='primary' autoFocus>
                Try Again
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </div>
  )
}
