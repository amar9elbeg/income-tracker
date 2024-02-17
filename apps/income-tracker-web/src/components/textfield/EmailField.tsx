import { TextFieldProps } from '@mui/material';
import { TextField } from './TextField';

export const EmailField: React.FC<TextFieldProps> = (props) => {
  return (
    <TextField placeholder="Email" {...props} helperText={props.helperText} />
  );
};
