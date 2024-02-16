import { ButtonProps, Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles'; // Changed to '@mui/system'

const StyledButton = styled(MuiButton)<ButtonProps>(() => ({
  backgroundColor: '#0166FF',
  textTransform: 'none',
  color: '#ffffff',

  '&:hover': {
    backgroundColor: '#0166FF',
    color: '#ffffff',
  },
}));

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
