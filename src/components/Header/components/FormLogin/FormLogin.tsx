import InputTextField from '@/features/ControlFrom/InputField/InputTextField'
import PasswordField from '@/features/ControlFrom/PasswordField/PasswordField'
import {yupResolver} from '@hookform/resolvers/yup'
import {Box, Button} from '@mui/material'
import {useForm, UseFormReturn} from 'react-hook-form'
import * as yup from 'yup'

export interface IFormLoginProps {
  onSubmit?: (values: FormLogin) => void
}
export interface FormLogin {
  username: string
  password: string
}

export default function FormLogin({onSubmit}: IFormLoginProps) {
  const schema = yup
    .object({
      username: yup.string().min(6).required('Hãy nhập tên đăng nhập của bạn'),
      password: yup.string().min(6).required('Hãy nhập mật khẩu của bạn'),
    })
    .required()
  const form: UseFormReturn<FormLogin> = useForm<FormLogin>({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  })
  const handleSubmit = (values: FormLogin) => {
    if (onSubmit) {
      onSubmit(values)
    }
  }
  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '10px',
        minWidth: '300px',
      }}
    >
      <Box width={'100%'} height={'90px'}>
        <InputTextField name='username' label='Tài Khoản' form={form} />
      </Box>
      <Box width={'100%'} height={'90px'} fontSize={'1.4rem'}>
        <PasswordField name='password' label='Mật Khẩu' form={form} />
      </Box>
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
        Đăng nhập
      </Button>
    </form>
  )
}
