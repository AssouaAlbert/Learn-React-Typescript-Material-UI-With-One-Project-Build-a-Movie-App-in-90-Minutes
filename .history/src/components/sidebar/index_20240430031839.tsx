import React, { ReactElement } from 'react'
import homeIcon from "../../assets/icons/icon-nav-home.svg";
import movieIcon from "../../assets/icons/icon-nav-movies.svg";
import tvSeriesIcon from "../../assets/icons/icon-nav-tv-series.svg";
import bookmarkIcon from "../../assets/icons/icon-nav-bookmark.svg";
import { Link, useLocation } from 'react-router-dom'
import { Box, Hidden, Typography } from '@mui/material'
import { JsxElement } from 'typescript'

interface linkRoute {
  name: string,
  icon: string,
  link: string
}
const navLinks: linkRoute[] = [{
  name: "Home",
  icon: homeIcon,
  link: "/"
},
{
  name: "Movies",
  icon: movieIcon,
  link: "/movie"
}
  ,
{
  name: "Bookmarks",
  icon: bookmarkIcon,
  link: "/bookmarks"
}
  ,
{
  name: "TvSeries",
  icon: tvSeriesIcon,
  link: "/tv-series"
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
            return <Link key={item.name} to={item.link} style={{ textDecoration: 'none' }}>
              <Box
              sx={{
                display: 
              }}
              >
                <img src={item.icon} alt={item.name} style={{
                  width: '18px',
                  filter: `${pathname === item.link ? 'invert(58%) sepia(14%) saturated(3166%) brightness(99%)' : 'invert(84%)'}`

                }} />
                <Hidden mdDown>
                  <Typography>{item.name}</Typography>
                </Hidden>
              </Box>

            </Link>
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default Sidebar
