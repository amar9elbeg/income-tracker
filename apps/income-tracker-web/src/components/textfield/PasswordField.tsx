import { TextFieldProps } from '@mui/material';
import { TextField } from './TextField';

export const PasswordField: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField
      placeholder="Password"
      type="password"
      {...props}
      helperText={props.helperText}
    />
  );
};
