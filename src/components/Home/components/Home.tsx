import Coupon from '@/components/Coupon'
import Polices from '@/components/Policies'
import MouduleProduct from '@/components/Products/components/MouduleProduct'
import Section from '@/components/Section'

export default function Home() {
  return (
    <div>
      <Section />
      <Polices />
      <Coupon />
      <MouduleProduct />
    </div>
  )
}
