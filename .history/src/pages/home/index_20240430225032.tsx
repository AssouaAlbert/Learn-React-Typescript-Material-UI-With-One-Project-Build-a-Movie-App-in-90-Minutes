
import React from 'react'
import Layout from '../../Layout'
import { Box, Input, Paper } from '@mui/material'
import InputBase from '@mui/material/InputBase';

function Home() {
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
              ml: 1,
              border: "none",
              width: ''
            }}
          ></InputBase>
        </Paper>
      </Box>
    </Layout>
  )
}

export default Home