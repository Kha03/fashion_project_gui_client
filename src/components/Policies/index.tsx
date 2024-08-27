import {Box, Container} from '@mui/material'
import PoliciesItem from './PoliciesItem'

const polices = [
  {
    title: 'Privacy Policy',
    description: 'We are committed to protecting your privacy.',
  },
  {
    title: 'Terms of Service',
    description: 'We are committed to protecting your privacy.',
  },
  {
    title: 'Cookie Policy',
    description: 'We are committed to protecting your privacy.',
  },
  {
    title: 'GDPR Compliance',
    description: 'We are committed to protecting your privacy.',
  },
]
export default function Polices() {
  return (
    <Box>
      <Container>
        <PoliciesItem polices={polices} />
      </Container>
    </Box>
  )
}
