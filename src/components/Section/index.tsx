import {Box} from '@mui/material'
import {PATH_IMG_SLIDER} from '../../common/PathImg'
import SectionImg from './SectionImg'
import './style.scss'
export default function Section() {
  const sectionImage = [`${PATH_IMG_SLIDER}slider_1.png`, `${PATH_IMG_SLIDER}slider_2.png`]

  return (
    <Box className='section' position={'relative'}>
      <SectionImg sectionImage={sectionImage} />
    </Box>
  )
}
