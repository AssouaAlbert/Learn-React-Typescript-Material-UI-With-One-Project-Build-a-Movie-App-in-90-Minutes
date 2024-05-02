
import React, { ReactEventHandler, useState } from 'react'
import Layout from '../../Layout'
import { Box, InputAdornment, Paper } from '@mui/material'
import InputBase from '@mui/material/InputBase';
import SearchIcon from '../../assets/icons/icon-search.svg'

function Home() {
  const [search, setSearch] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <Layout>
      <Box>
        <Paper component={"form"} sx={{
          display: "flex",
          alignItems: 'center',
          borderRadius: 'default', p: 1, backgroundColor: '#20141f', border: 'none'
        }}>
          <InputBase placeholder="Search..."
            autoComplete="true"
            color='warning'
            inputProps={{ 'aria-label': 'search' }}
            sx={{
              color: 'white',
              mx: 1,
              border: "none",
              width: '100%'
            }}
            value={search}
            onChange={handleChange}
            startAdornment={<InputAdornment position='start'> <img src={SearchIcon} alt="Search Icon" width={20} height={20} />
            </InputAdornment>}
          ></InputBase>
        </Paper>
      </Box>
      <Box py={2} px={4}>
        {search === '' ? (<Box width='100%'>
          <Box width='100%'>
<
          </Box>

        </Box>) : (<Box></Box>)}

      </Box>
    </Layout>
  )
}

export default Home
