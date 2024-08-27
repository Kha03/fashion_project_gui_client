import {Zoom} from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import {NextArrow, PrevArrow} from './CustomArrow'
export interface ISectionImgProps {
  sectionImage: string[]
}

export default function SectionImg({sectionImage}: ISectionImgProps) {
  return (
    <Zoom
      indicators
      onChange={function noRefCheck() {}}
      onStartChange={function noRefCheck() {}}
      scale={1.4}
      prevArrow={<PrevArrow onClick={() => {}} />}
      nextArrow={<NextArrow onClick={() => {}} />}
    >
      {sectionImage.map((each, index) => (
        <div key={index} style={{width: '100%', height: '100vh'}}>
          <a href='#!'>
            <img
              style={{
                objectFit: 'contain',
                width: '100%',
                height: '100%',
              }}
              alt='Slide Image'
              src={each}
            />
          </a>
        </div>
      ))}
    </Zoom>
  )
}
