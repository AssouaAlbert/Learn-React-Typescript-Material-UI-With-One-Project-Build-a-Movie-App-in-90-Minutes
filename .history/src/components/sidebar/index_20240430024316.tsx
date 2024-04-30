import React from 'react'
import HomeIcon from '../icons/home-icon'
import MovieIcon from '../icons/movie-icon'
import BookmarkIcon from '../icons/bookmark-icon'
import TvSeriesIcon from '../icons/series-icon'
import { useLocation } from 'react-router-dom'
import { Box, Hidden, Typography } from '@mui/material'

const naveLink = [{
  name: "Home",
  icon: HomeIcon,
  link: "/"
},
{
  name: "Movies",
  icon: MovieIcon,
  link: "/movie"
}
  ,
{
  name: "Bookmarks",
  icon: BookmarkIcon,
  link: "/bookmarks"
}
  ,
{
  name: "TvSeries",
  icon: TvSeriesIcon,
  link: "/tv-series"
}
  ,
{
  name: "Movies",
  icon: MovieIcon,
  link: "/movie"
}
]


function Sidebar() {
  const { pathname } = useLocation();
  return (
    <Box sx={{
      backgroundColor: "161d2f",
      padding: 2,
      borderRadius: 2,
      display: "flex",
      flexDiirextion: {
        xs: "row",
        lg: "column"
      },
      alignItems: "center",
      justifyContent: "space-between",
      width: {
        sm: "100%",
        lg: "200px"
      }
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: {
          xs: "row",
          lg: 'column'
        },
        gap: 5,
        alignItems: {
          xs: 'center',
          ls: 'start'
        },
        width: '100%'

      }}>
        <Hidden smDown>
          <Typography variant='h5' component='h1' my={2} ></Typography>
        </Hidden>
      </Box>
    </Box>
  )
}

export default Sidebar
