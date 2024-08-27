import {FormLogin} from '@/components/Header/components/FormLogin/FormLogin'
import {TextField} from '@mui/material'
import {Controller, UseFormReturn} from 'react-hook-form'

export interface InputTextFieldProps {
  name: keyof FormLogin
  label: string
  form: UseFormReturn<FormLogin>
}

function InputTextField({name, label, form}: InputTextFieldProps) {
  const {
    formState: {errors},
  } = form
  const error = errors[name]

  return (
    <Controller
      render={({field}) => (
        <TextField
          variant='outlined'
          label={label}
          fullWidth
          margin='normal'
          {...field}
          error={!!error}
          helperText={error?.message}
          InputProps={{
            sx: {fontSize: '1.4rem'}, // Adjust font size here
          }}
          InputLabelProps={{
            sx: {fontSize: '1.4rem'}, // Adjust label font size here
          }}
        />
      )}
      name={name}
      control={form.control}
    />
  )
}

export default InputTextField
