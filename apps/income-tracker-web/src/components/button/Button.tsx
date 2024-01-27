import { ButtonProps, Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles'; // Changed to '@mui/system'

const StyledButton = styled(MuiButton)<ButtonProps>(() => ({
  backgroundColor: '#0166FF',
  borderRadius: '20px',
  padding: '16px',
  textTransform: 'none',
  fontSize: '20px',
  fontWeight: 400,
  lineHeight: '28px',
}));

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, variant = 'contained', ...otherProps } = props;
  return (
    <StyledButton variant={variant} {...otherProps}>
      {children}
    </StyledButton>
  );
};
