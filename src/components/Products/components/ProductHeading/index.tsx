import {Box, Typography} from '@mui/material'
import '../ProductItem/style.scss'

export interface IProductHeadingProps {
  title: string
  subTitle: string
  link: string
}

export default function ProductHeading(props: IProductHeadingProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box>
        <a href='#!' className='product-link'>
          <Typography variant='h3' sx={{fontSize: '1.8rem', fontWeight: '300', lineHeight: '112%'}}>
            {props.title}
          </Typography>
          <Typography
            variant='h2'
            sx={{fontSize: '2.4rem', fontWeight: '300', lineHeight: '112%', mt: '4px'}}
          >
            {props.subTitle}
          </Typography>
        </a>
      </Box>
      <a href='#!' className='product-link'>
        <Typography
          component={'span'}
          sx={{
            fontSize: '1.4rem',
            fontWeight: '300',
            lineHeight: '112%',
            textDecoration: 'underline',
          }}
        >
          {props.link}
        </Typography>
      </a>
    </Box>
  )
}
