import React from 'react'
import HomeIcon from '../icons/home-icon'
import MovieIcon from '../icons/movie-icon'
import BookmarkIcon from '../icons/bookmark-icon'
import TvSeriesIcon from '../icons/series-icon'
import { useLocation } from 'react-router-dom'

const naveLink = [{
  name: "Home",
  icon: HomeIcon,
  link: "/"
},
{
  name: "Movies",
  icon: MovieIcon,
  link:"/movie"
}
,
{
  name: "Bookmarks",
  icon: BookmarkIcon,
  link:"/bookmarks"
}
,
{
  name: "TvSeries",
  icon: TvSeriesIcon,
  link:"/tv-series"
}
,
{
  name: "Movies",
  icon: MovieIcon,
  link:"/movie"
}
]


function Sidebar() {
  const {} = useLocation()
  return (
    <div>
      
    </div>
  )
}

export default Sidebar
