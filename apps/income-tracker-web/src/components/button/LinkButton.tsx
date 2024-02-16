import { TypographyProps } from '@mui/material';
import { Typography } from '../typography';
import { styled } from '@mui/material/styles'; // Changed to '@mui/system'

const StyledTypography = styled(Typography)<TypographyProps>(() => ({
  color: '#0166FF',
  cursor: 'pointer',
}));

export const LinkButton: React.FC<TypographyProps> = ({
  children,
  ...props
}) => {
  return <StyledTypography {...props}>{children}</StyledTypography>;
};
