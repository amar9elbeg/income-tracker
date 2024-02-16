import { TextFieldProps } from '@mui/material';
import { TextField } from './TextField';

export const PasswordField: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField
      fullWidth
      placeholder="Password"
      type="password"
      {...props}
      helperText={props.helperText}
      FormHelperTextProps={{
        error: true,
      }}
    />
  );
};
