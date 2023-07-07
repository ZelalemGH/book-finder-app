import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledHeader = styled(Typography)`
  text-align: center;
  margin: 0.5rem 0rem !important;
`;

function Header(props) {
    return <StyledHeader variant='h6'>{props.headerTitle}</StyledHeader>;
}

export default Header;
