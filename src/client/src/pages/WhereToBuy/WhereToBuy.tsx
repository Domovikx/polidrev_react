import * as React from 'react';
import EnterpriseMap from '../../components/common/EnterpriseMap';
import OnFade from '../../components/common/OnFade';
import StoresMap from '../../components/common/StoresMap';
import { uid } from 'uid';
import { useStyles } from './WhereToBuy.styles';
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';

export const WhereToBuy = () => {
  const classes = useStyles();
  const theme = useTheme();
  const upLg = useMediaQuery(theme.breakpoints.up('lg'));
  const upMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <OnFade>
      <Box>
        <Container>
          <Typography variant="h6" component="h2">
            Где купить мебель "Полидрев"
          </Typography>

          <p>
            <b>ООО "БелАртМебель":</b>
            <br />
            ул.Чкалова, 19/1 <br />
            пр-т Московский, 64 <br />
            ул.39-й Армии, 22 <br />
            ул.Ленина, 48 <br />
            ул.Советской Армии, 4
          </p>

          <p>
            <b>Торговый Дом (г.Полоцк)</b> - г.Полоцк ул.Гоголя,16
          </p>

          <p>
            <b>ОАО "Витебский Хозторг" :</b>
            <br />
            ул.1-я Пролетарская, 3<br />
            ул.Чкалова, 17/2 <br />
            г.Новополоцк ул.Молодежная, 40
          </p>
        </Container>

        {upLg ? (
          <Container className={classes.map} key={uid()}>
            <StoresMap />
          </Container>
        ) : (
          <Box className={classes.map} key={uid()}>
            <StoresMap />
          </Box>
        )}

        <Container>
          <Typography variant="h6" component="h2">
            Склад-магазин "Полидрев"
          </Typography>
          <p>Витебский район, аг. Октябрьская, ул.Октябрьская, 7</p>
          <p>
            Время работы склад-магазина: <br />
            Пн-Пт: с 8.30 до 18.30 (без обеда) <br />
            Суббота: с 09.30 до 14.30. <br />
            Воскресенье: Выходной
          </p>
        </Container>

        {upLg && (
          <Container className={classes.map} key={uid()}>
            <EnterpriseMap />
          </Container>
        )}
        {upMd && !upLg && (
          <Box className={classes.map} key={uid()}>
            <EnterpriseMap />
          </Box>
        )}
      </Box>
    </OnFade>
  );
};
