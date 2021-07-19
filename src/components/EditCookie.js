import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import EditIcon from '@material-ui/icons/Edit'

// const editCookies = () => {
//   fetchCookies()
//   fetchDomain()
// }

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      color: theme.palette.text.white,
    },
  })
)

export default function SvgMaterialIcons() {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Grid item xs={8}>
        <EditIcon />
      </Grid>
    </Grid>
  )
}
