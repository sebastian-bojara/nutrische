import { Container, Grid, Typography } from "@mui/material";
import styled from "styled-components";

import Day from "../Day/Day";
import Recipe from "../Recipe/Recipe";

import { colors } from "../theme";

const breakfast = {
    name: "JAGLANKA NA MLEKU KOKOSOWYM",
    howTo:
      "Do podania: owoce (porzeczki, maliny, wisnie, truskarki, borowki), syrop klonowy, cynamon Kasze optucz, wsyp do garnka, dodaj jagody i podpraz prez 2 minuty, czesto mieszajac. Wej mleko i wode, wymieszaj. Gotuj, az kasza wchtonie plyn ok. I5 minut. Od czasu do czasu zamieszaj. Przeló¿ do misek, oprósz cynamonem, podawaj z owocami i syropem klonowym.",
    extra:
      "Kasza jaglana jest lekkostrawna i bogata w witaminy z grupy B, zelazo i miedz. Wspaniala do dan wytrawnych i stodkich. Idealna na pozywne sniadanie. Zamiast mleka kokosowego mozesz dodac migdatowe, ryzowe, sojowe. Do jaglanki, zamiast goji, dodaj suszona zurawine, kilka sliwek lub moreli.",
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
  
  const lunch = {
    name: "SAłATKA Z BURAKAMI CIECIERZYCA",
    howTo:
      "Buraki pokrój na plasterki, pretoz na polmisek. Dodaj oplukana ciecierzyce, pokrojone a paski suszone pomidory;, kapary i kawatki awokado. Oliwe wymieszaj z octem i natka, dodaj precisniety przez praske czosnek, polej salatke. Posy pokruszona feta, pestkami granatu i slonecanika, oprosz pieprzem.",
    extra:
      "Prosta salatka z buralami w roli glownej. Zamiast fety moze by mozzarella ailbo ser z blgkiuna plesnia, zamiast ciecierzycy - fasola z pusaki. Dodadiowo wizué oliwki i kawalki pieczonej papryki. Zamiast pestek granatu dodaj inne owoce, ktore sprawdzaja sig w wytrawnych salackach - Sliwki, maliny, borowki.",
    ingridients: [
      {
        name: "buraki (gotowane, pieczone)",
        amount: "300",
        unit: "g",
      },
      {
        name: "awokado",
        amount: "1",
        unit: "pieces",
      },
      {
        name: "ciecierzuca (z puszki, stoika)",
        amount: "200",
        unit: "g",
      },
      {
        name: "feta",
        amount: "150",
        unit: "g",
      },
      {
        name: "suszone pomidory",
        amount: "4-5",
        unit: "pieces",
      },
      {
        name: "kapary",
        amount: "1",
        unit: "small spons",
      },
      {
        name: "pestki granatu",
        amount: "2",
        unit: "spoons",
      },
      {
        name: "pestki stonecznika",
        amount: "1",
        unit: "spoon",
      },
      {
        name: "oliwa",
        amount: "3",
        unit: "spoon",
      },
      {
        name: "ocet balsamiczny",
        amount: "3",
        unit: "spoon",
      },
      {
        name: "czosnek",
        amount: "1",
        unit: "cloves",
      },
      {
        name: "natka posiekana",
        amount: "1",
        unit: "spoon",
      },
      {
        name: "świezo mielony pieprz",
        amount: "at your discretion",
        unit: "at your discretion",
      },
    ],
    time: 10,
    kcal: 412,
    amountOfPortions: 4,
  };
  
  const desert = {
    name: "DESER Z ORZESZKAMI",
    howTo:
      "Daktyle zalej goraca przegotowana woda, odstaw na 10 minut. Orzeszki upraz na patelni bez ttuszczu. Kiedy sie przyrumienia, wlej syrop, wymieszaj, zdejmij z palnika, wystudz Daktyle pokroj, wrzué do malaksera, dodaj 6-7 lyzek wody, w ktorej sie moczyly, masto orzechowe i kakao, blenduj na gladka mase. Dodaj jogurt, wymieszaj. Do saklaneczek natoi porcje jogurtu z daktylowym karmelem, a na wierzch porcie orzechow w syropie.",
    extra:
      "Deser z prazonymi karmelizowanymi orzeszkami ziemnymi i kremem z dak tyli, masta orzechowego i kakao. W smaku przypomina batony Snickers. Zamiast jogurtu moze byé skyr albo ricotta.",
    ingridients: [
      {
        name: "Orzeszki ziemne",
        amount: "100",
        unit: "g",
      },
      {
        name: "Syrop klonowy",
        amount: "3",
        unit: "spoons",
      },
      {
        name: "Daktyle",
        amount: "16",
        unit: "pieces",
      },
      {
        name: "Masto orzechowe",
        amount: "2",
        unit: "spoons",
      },
      {
        name: "Kakao",
        amount: "3",
        unit: "spoons",
      },
      {
        name: "Jogurt gesty 2-3% tuszczu",
        amount: "400",
        unit: "g",
      },
    ],
    time: 20,
    kcal: 272,
    amountOfPortions: 6,
  };

const CurrentWeek = () => {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Header variant="h2">
        Current week
      </Header>
      <Grid container spacing={2}>
        <Day name="Tuesday">
          <Recipe type="BREAKFAST" {...breakfast} />
          <Recipe type="SECOND BREAKFAST" {...desert} />
          <Recipe type="LUNCH" {...lunch} />
          <Recipe type="DINNER" {...breakfast} />
        </Day>
        <Day name="Wednesday">
          <Recipe type="BREAKFAST" {...breakfast} />
          <Recipe type="SECOND BREAKFAST" {...desert} />
          <Recipe type="LUNCH" {...lunch} />
          <Recipe type="DINNER" {...breakfast} />
        </Day>
        <Day name="Thursday">
          <Recipe type="BREAKFAST" {...breakfast} />
          <Recipe type="SECOND BREAKFAST" {...desert} />
          <Recipe type="LUNCH" {...lunch} />
          <Recipe type="DINNER" {...breakfast} />
        </Day>
      </Grid>
    </Container>
  );
};

const Header = styled(Typography)`
    background: ${colors.primary};
    color: ${colors.white};
    padding: 1rem;
`;

export default CurrentWeek;
