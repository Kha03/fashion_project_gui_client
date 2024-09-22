import {ArrowBackIos, ArrowForwardIos} from '@mui/icons-material'
import {Box, IconButton} from '@mui/material'

export interface IProductImageDetailProps {
  url: string
  onPrev: () => void
  onNext: () => void
}

export default function ProductImageDetail({url, onPrev, onNext}: IProductImageDetailProps) {
  return (
    <Box position='relative' width={'450px'} height={'600px'}>
      <IconButton
        onClick={onPrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '0',
          transform: 'translateY(-50%)',
          zIndex: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        <ArrowBackIos />
      </IconButton>
      <img
        src={url}
        alt=''
        style={{width: '100%', height: '100%', objectFit: 'cover'}}
        draggable={false}
      />
      <IconButton
        onClick={onNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: '0',
          transform: 'translateY(-50%)',
          zIndex: 1,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        <ArrowForwardIos />
      </IconButton>
    </Box>
  )
}
