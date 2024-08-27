import {FormLogin} from '@/components/Header/components/FormLogin/FormLogin'
import {Visibility, VisibilityOff} from '@mui/icons-material'
import {IconButton, InputAdornment, TextField} from '@mui/material'
import {useState} from 'react'
import {Controller, UseFormReturn} from 'react-hook-form'

export interface IPasswordFieldProps {
  name: keyof FormLogin
  label: string
  form: UseFormReturn<FormLogin>
}

export default function PasswordField({name, label, form}: IPasswordFieldProps) {
  const {
    formState: {errors},
  } = form
  const error = errors[name]
  const [showPassword, setShowPassword] = useState(false)
  const toggleShowPassword = () => setShowPassword((x) => !x)
  return (
    <Controller
      name={name}
      control={form.control}
      render={({field}) => (
        <TextField
          {...field}
          id={name}
          type={showPassword ? 'text' : 'password'}
          label={label}
          fullWidth
          variant='outlined'
          margin='normal'
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={toggleShowPassword}
                  edge='end'
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
            sx: {fontSize: '1.4rem'}, // Adjust font size here
          }}
          InputLabelProps={{
            sx: {fontSize: '1.4rem'}, // Adjust label font size here
          }}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  )
}
