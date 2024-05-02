
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
          
            inputProps={{ 'aria-label': 'search' }}></InputBase>
        </Paper>
      </Box>
    </Layout>
  )
}

export default Home
