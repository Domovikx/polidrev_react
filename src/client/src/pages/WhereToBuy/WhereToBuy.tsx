import * as React from 'react';
import CommonFade from '../../components/common/CommonFade';
import EnterpriseMap from '../../components/common/EnterpriseMap';
import StoresMap from '../../components/common/StoresMap';
import { useStyles } from './WhereToBuy.styles';
import {
  Box,
  Container,
  List,
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
    <CommonFade>
      <Box>
        <Box pt={3}>
          <Container>
            <Typography variant="h6" component="h2" color="textPrimary">
              Где купить мебель "Полидрев"
            </Typography>

            <Typography variant="body1" color="textPrimary">
              <List>
                <li>
                  <b>ООО "БелАртМебель" :</b>
                </li>
                <li>ул.Чкалова, 19/1</li>
                <li>пр-т Московский, 64</li>
                <li>ул.39-й Армии, 22</li>
                <li>ул.Ленина, 48</li>
                <li>ул.Советской Армии, 4</li>
              </List>

              <List>
                <li>
                  <b>Торговый Дом (г.Полоцк) :</b>
                </li>
                <li>г.Полоцк ул.Гоголя,16</li>
              </List>

              <List>
                <li>
                  <b>ОАО "Витебский Хозторг" :</b>
                </li>
                <li>ул.1-я Пролетарская, 3</li>
                <li>ул.Чкалова, 17/2</li>
                <li>г.Новополоцк ул.Молодежная, 40</li>
              </List>
            </Typography>
          </Container>
        </Box>

        {upLg ? (
          <Container className={classes.map}>
            <StoresMap />
          </Container>
        ) : (
          <Box className={classes.map}>
            <StoresMap />
          </Box>
        )}

        <Box pt={3}>
          <Container>
            <Typography variant="h6" component="h2" color="textPrimary">
              Склад-магазин "Полидрев"
            </Typography>

            <Typography variant="body1" color="textPrimary">
              <List>
                <li>
                  <b>Витебский район, аг. Октябрьская, ул.Октябрьская, 7</b>
                </li>
                <li>
                  Время работы склад-магазина: <br />
                  Пн-Пт: с 8.30 до 18.30 (без обеда) <br />
                  Суббота: с 09.30 до 14.30. <br />
                  Воскресенье: Выходной
                </li>
              </List>
            </Typography>
          </Container>
        </Box>

        {upLg && (
          <Container className={classes.map}>
            <EnterpriseMap />
          </Container>
        )}
        {upMd && !upLg && (
          <Box className={classes.map}>
            <EnterpriseMap />
          </Box>
        )}
      </Box>
    </CommonFade>
  );
};
