import { Grid, Typography } from "@mui/material";
import styled from "styled-components";

import { colors } from "../theme";

const Day = ({ children }) => {
  return (
    <Grid md={4} xs={12} container>
      <Header variant="h4" gutterBottom>
        Tuesday
      </Header>
      {children}
    </Grid>
  );
};

const Header = styled(Typography)`
  background: ${colors.yellow};
  color: ${colors.white};
  padding: 1rem;
  flex-grow: 1;
`;

export default Day;
