import React from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

interface CustomArrowProps {
  direction: 'left' | 'right'
  onClick: () => void
}
const CustomArrow = ({direction, onClick}: CustomArrowProps) => {
  return (
    <div
      onClick={onClick}
      className='arrow-cus'
      style={{
        [direction]: '10px',
      }}
    >
      {direction === 'left' ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
    </div>
  )
}

export const PrevArrow: React.FC<{onClick: () => void}> = (props) => (
  <CustomArrow direction='left' {...props} />
)

export const NextArrow: React.FC<{onClick: () => void}> = (props) => (
  <CustomArrow direction='right' {...props} />
)
