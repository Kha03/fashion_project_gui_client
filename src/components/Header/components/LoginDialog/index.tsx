import {AppDispatch} from '@/app/store'
import FormLogin, {
  FormLogin as LoginValues,
} from '@/components/Header/components/FormLogin/FormLogin'
import {registerUser} from '@/features/Auth/userSlice'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import {useDispatch} from 'react-redux'

export interface ILoginDialogProps {
  open: boolean
  handleClose: () => void
}

export default function LoginDialog({open, handleClose}: ILoginDialogProps) {
  const dispatch = useDispatch<AppDispatch>()
  const onSubmit = async (values: LoginValues) => {
    const loginRequest = {
      username: values.username,
      password: values.password,
    }

    try {
      const action = registerUser(loginRequest)
      const user = await dispatch(action).unwrap()
      handleClose()
      console.log(user)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle fontSize={'1.8rem'}>Đăng nhập</DialogTitle>
      <DialogContent>
        <FormLogin onSubmit={onSubmit} />
      </DialogContent>
    </Dialog>
  )
}
