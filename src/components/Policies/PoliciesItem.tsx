import {Box, Grid, Paper, styled, Typography} from '@mui/material'
import {PATH_IMG_SLIDER} from '../../common/PathImg'

export interface IPoliciesItem {
  polices: ItemPolices[]
}
export interface ItemPolices {
  title: string
  description: string
}
const Item = styled(Paper)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  border: '1px solid #6782a6',
  ...theme.typography.body2,
  padding: '10px',
  // textWrap: 'nowrap',
  textAlign: 'center',
  borderRadius: 8,
  color: '#000',
  minWidth: '265px',
}))
export default function PoliciesItem({polices}: IPoliciesItem) {
  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2}>
        {polices.map((item, index) => (
          <Grid item xs={12} sm={12} md={6} lg={3} key={item.title}>
            <Item elevation={2}>
              <img src={`${PATH_IMG_SLIDER}poli_${index + 1}.png`} alt='' />
              <Typography component={'h3'} sx={{fontSize: '1.5rem', mt: 2}}>
                {item.title}
              </Typography>
              <Typography component={'p'} sx={{fontSize: '1.2rem', mt: 1, opacity: 0.75}}>
                {item.description}
              </Typography>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
