import React, { ReactElement } from 'react'
import HomeIcon from '../icons/home-icon'
import MovieIcon from '../icons/movie-icon'
import BookmarkIcon from '../icons/bookmark-icon'
import TvSeriesIcon from '../icons/series-icon'
import { Link, useLocation } from 'react-router-dom'
import { Box, Hidden, Typography } from '@mui/material'
import { JsxElement } from 'typescript'

interface linkRoute {
  name: string,
  icon: ({ fill, width, height }: Record<string, string>) => JSX.Element,
  link: string
}
const navLinks : linkRoute[] = [{
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
          <Typography variant='h5' component='h1' my={2} fontWeight={400} fontSize={18}>ShowApp</Typography>
        </Hidden>
        <Box sx={{
          py: {
            sm: 0,
            lg: '16px'
          },
          display: 'flex',
          flexDirection: {
            xs: 'row',
            lg: 'column'
          },
          gap: 4
        }}>
          {navLinks.map((item: linkRoute) => {
            return <Link key={} />
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar