import {yupResolver} from '@hookform/resolvers/yup'
import {useForm, UseFormReturn} from 'react-hook-form'

import QuantityField from '@/features/ControlFrom/QuantityField/QuantityField'
import {Button} from '@mui/material'
import * as yup from 'yup'

export interface IFromBuyProps {
  onSubmit?: (values: FormValues) => void
}
export interface FormValues {
  product_quantity: number
}
export default function FromBuy({onSubmit}: IFromBuyProps) {
  const schema = yup
    .object({
      product_quantity: yup
        .number()
        .min(1, 'Minimum is 1')
        .typeError('Please enter a number')
        .required('Please enter product quantity'),
    })
    .required()
  const form: UseFormReturn<FormValues> = useForm<FormValues>({
    defaultValues: {
      product_quantity: 1,
    },
    resolver: yupResolver(schema),
  })
  const handleSubmit = (values: FormValues) => {
    if (onSubmit) {
      onSubmit(values)
    }
  }
  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      style={{display: 'flex', alignItems: 'center', gap: '10px'}}
    >
      <QuantityField name='product_quantity' label='Số lượng' form={form} />
      <Button
        variant='outlined'
        type='submit'
        color='inherit'
        size='large'
        sx={{
          fontSize: '1.2rem',
          color: 'black',
          backgroundColor: 'white',
          '&:hover': {
            color: 'white',
            backgroundColor: 'black',
          },
        }}
      >
        Thêm Vào Giỏ Hàng
      </Button>
    </form>
  )
}
