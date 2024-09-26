import {FormValues} from '@/components/Products/components/FormBuy'
import {Add, Remove} from '@mui/icons-material'
import {Box, IconButton, TextField, Typography} from '@mui/material'
import {Controller, UseFormReturn} from 'react-hook-form'

export interface QuantityFieldProps {
  name: keyof FormValues
  label: string
  form: UseFormReturn<FormValues>
}

function QuantityField({name, label, form}: QuantityFieldProps) {
  const {setValue, getValues} = form

  const handleIncrement = () => {
    const currentValue = getValues(name)
    setValue(name, currentValue + 1)
  }

  const handleDecrement = () => {
    const currentValue = getValues(name)
    if (currentValue > 1) {
      setValue(name, currentValue - 1)
    }
  }

  return (
    <Controller
      name={name}
      control={form.control}
      render={({field}) => (
        <Box>
          <Typography variant='body1' display={'none'}>
            {label}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: '1px solid #666',
              p: 1,
              borderRadius: '10px',
            }}
          >
            <IconButton onClick={handleDecrement} disabled={getValues(name) <= 1} sx={{p: 0}}>
              <Remove />
            </IconButton>
            <TextField
              {...field}
              size='medium'
              id={name}
              sx={{
                width: '100px',
                textAlign: 'center',
                '& .MuiInputBase-input': {fontSize: '1.4rem', color: '#000'},
              }}
              variant='standard'
              margin='none'
              InputProps={{
                readOnly: true,
                inputProps: {style: {textAlign: 'center'}},

                disableUnderline: true, // <== added this
              }}
            />
            <IconButton onClick={handleIncrement} sx={{p: 0}}>
              <Add />
            </IconButton>
          </Box>
        </Box>
      )}
    />
  )
}

export default QuantityField
