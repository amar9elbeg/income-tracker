import { TypographyProps, Typography as MuiTypography } from '@mui/material';
import { styled } from '@mui/material/styles'; // Changed to '@mui/system'

const StyledTypography = styled(MuiTypography)<TypographyProps>(() => ({
  fontWeight: '400',
  fontSize: '16px',
  lineHeight: '24px',
  color: '#0F172A',
}));

export const Typography: React.FC<TypographyProps> = ({
  children,
  ...props
}) => {
  return <StyledTypography {...props}>{children}</StyledTypography>;
};
