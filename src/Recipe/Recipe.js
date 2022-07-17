import { Container, Typography } from "@mui/material";

const Recipe = ({ name, type }) => {
  return (
    <Container>
        <Typography variant="h5" component="h4" gutterBottom>
            {type}: {name}
        </Typography>
    </Container>
  );
};

export default Recipe;
