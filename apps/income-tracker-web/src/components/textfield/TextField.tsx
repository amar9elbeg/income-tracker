import { TextField as MuiTextField, TextFieldProps } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTextField = styled(MuiTextField)<TextFieldProps>(() => ({
  '& .MuiInputBase-root': {
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '24px',
  },
  '& .MuiInputBase-input': {
    padding: '16px',
  },
}));

export const TextField: React.FC<TextFieldProps> = (props) => {
  return (
    <StyledTextField
      fullWidth
      FormHelperTextProps={{
        error: true,
      }}
      {...props}
    />
  );
};
