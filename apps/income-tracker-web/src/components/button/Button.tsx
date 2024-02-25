import { ButtonProps, Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles'; // Changed to '@mui/system'

const StyledButton = styled(MuiButton)<ButtonProps>(() => ({
  backgroundColor: '#0166FF',
  textTransform: 'none',
  color: '#ffffff',
  borderRadius: '20px',
  padding: '16px',
  fontSize: '20px',
  fontWeight: 400,
  lineHeight: '28px',
  '&:hover': {
    backgroundColor: '#0166FF',
    color: '#ffffff',
  },
}));

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
