import { Container, Grid, Typography, Item } from "@mui/material";

const breakfast = {
  name: 'JAGLANKA NA MLEKU KOKOSOWYM',
  howTo: 'Do podania: owoce (porzeczki, maliny, wisnie, truskarki, borowki), syrop klonowy, cynamon Kasze optucz, wsyp do garnka, dodaj jagody i podpraz prez 2 minuty, czesto mieszajac. Wej mleko i wode, wymieszaj. Gotuj, az kasza wchtonie plyn ok. I5 minut. Od czasu do czasu zamieszaj. Przeló¿ do misek, oprósz cynamonem, podawaj z owocami i syropem klonowym.',
  extra: 'Kasza jaglana jest lekkostrawna i bogata w witaminy z grupy B, zelazo i miedz. Wspaniala do dan wytrawnych i stodkich. Idealna na pozywne sniadanie. Zamiast mleka kokosowego mozesz dodac migdatowe, ryzowe, sojowe. Do jaglanki, zamiast goji, dodaj suszona zurawine, kilka sliwek lub moreli.',
  ingridients: [
    {
      name: "kasza jaglana",
      amount: 220,
      unit: "g",
    },
    {
      name: "Jagody goji",
      amount: 3,
      unit: "łyki",
    },
    {
      name: "mleko kokosowe",
      amount: 0.4,
      unit: "l",
    },
    {
      name: "woda",
      amount: 0.5,
      unit: "l",
    },
  ],
  time: 20,
  kcal: 415,
  amountOfPortions: 4,
};

const Recipe = ({ name }) => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2" gutterBottom component="div">
        Current week
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <Typography variant="h3" gutterBottom component="div">
            Tuesday
          </Typography>
          <Typography variant="h5" component="h4" gutterBottom>
            Breakfast
          </Typography>
          <Recipe {...breakfast} />
          <Typography variant="h5" component="h4" gutterBottom>
            Second breakfast
          </Typography>
          <Typography variant="h5" component="h4" gutterBottom>
            Lunch
          </Typography>
          <Typography variant="h5" component="h4" gutterBottom>
            Dinner
          </Typography>
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="h3" gutterBottom component="div">
            Wednesday
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Recipe;
