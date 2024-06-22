import { Box, Stack } from '@mui/material';
import React from 'react'
import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard'

function Videos({videos}) {
    console.log("hatat",videos);
  return (
    <Stack direction="row"  flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
    {videos.map((item, idx) => (
      <Box key={idx}>
        {item.id.videoId && <VideoCard video={item} /> }
        {item.id.channelId && <ChannelCard channelDetail={item} />}
      </Box>
    ))}
  </Stack>
  )
}

export default Videos