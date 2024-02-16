import { TypographyProps } from '@mui/material';
import { Typography } from './Typography';
import { styled } from '@mui/material/styles'; // Changed to '@mui/system'

const StyledTypography = styled(Typography)<TypographyProps>(() => ({
  fontWeight: '600',
  fontSize: '24px',
  lineHeight: '32px',
}));

export const Title: React.FC<TypographyProps> = ({ children, ...props }) => {
  return <StyledTypography {...props}>{children}</StyledTypography>;
};
