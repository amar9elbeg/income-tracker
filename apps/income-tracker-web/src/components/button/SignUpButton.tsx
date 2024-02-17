import { ButtonProps } from '@mui/material';
import { Button } from './Button';
import { styled } from '@mui/material/styles'; // Changed to '@mui/system'

const StyledButton = styled(Button)<ButtonProps>(() => ({
  borderRadius: '20px',
  padding: '16px',
  fontSize: '20px',
  fontWeight: 400,
  lineHeight: '28px',
}));

export const SignUpButton: React.FC<ButtonProps> = ({
  children,
  variant = 'contained',
  ...props
}) => {
  return (
    <StyledButton variant={variant} type="submit" {...props}>
      Sign up
    </StyledButton>
  );
};
