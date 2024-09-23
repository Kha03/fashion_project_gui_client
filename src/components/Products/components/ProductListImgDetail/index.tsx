import {Box} from '@mui/material'
import {useEffect, useRef, useState} from 'react'
import {useDraggable} from 'react-use-draggable-scroll'

export interface IProductListImgDetailProps {
  listImg?: string[]
  onChange?: (img: string, index: number) => void
  currentIndex?: number
}

export default function ProductListImgDetail({
  listImg,
  onChange,
  currentIndex,
}: IProductListImgDetailProps) {
  const [selectedImg, setSelectedImg] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>
  const {events} = useDraggable(ref)
  const handleClick = (img: string, index: number) => {
    if (onChange) {
      onChange(img, index)
    }
  }
  useEffect(() => {
    if (listImg && listImg[currentIndex || 0]) {
      setSelectedImg(listImg[currentIndex || 0])
    }
  }, [currentIndex, listImg])
  const images = listImg || []

  return (
    <Box
      width={'100px'}
      height={'100%'}
      maxHeight={'600px'}
      pr={'10px'}
      {...events}
      ref={ref}
      sx={{overflowY: 'scroll', scrollbarWidth: 'none'}}
    >
      {images.map((img, index) => (
        <Box
          key={index}
          width={'100%'}
          height={'100px'}
          onClick={() => handleClick(img, index)}
          sx={{
            cursor: 'pointer',
            p: '3px',
            mb: 1,
            border: selectedImg === img ? '1px solid #BEBEBE' : '2px solid transparent',
            borderRadius: '5px',
          }}
        >
          <img
            src={img}
            alt={`product_image_${index}`}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: selectedImg === img ? 0.8 : 1,
            }}
            draggable={false}
          />
        </Box>
      ))}
    </Box>
  )
}
