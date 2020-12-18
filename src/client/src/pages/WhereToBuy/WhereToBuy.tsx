import * as React from 'react';
import CommonFade from '../../components/common/CommonFade';
import EnterpriseMap from '../../components/common/EnterpriseMap';
import StoresMap from '../../components/common/StoresMap';
import { useStyles } from './WhereToBuy.styles';
import {
  Box,
  Container,
  List,
  ListItem,
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
            <Typography variant="h6" component="h2">
              Где купить мебель "Полидрев"
            </Typography>

            <List>
              <ListItem>
                <b>ООО "БелАртМебель" :</b>
              </ListItem>
              <ListItem>ул.Чкалова, 19/1</ListItem>
              <ListItem>пр-т Московский, 64</ListItem>
              <ListItem>ул.39-й Армии, 22</ListItem>
              <ListItem>ул.Ленина, 48</ListItem>
              <ListItem>ул.Советской Армии, 4</ListItem>
            </List>

            <List>
              <ListItem>
                <b>Торговый Дом (г.Полоцк) :</b>
              </ListItem>
              <ListItem>г.Полоцк ул.Гоголя,16</ListItem>
            </List>

            <List>
              <ListItem>
                <b>ОАО "Витебский Хозторг" :</b>
              </ListItem>
              <ListItem>ул.1-я Пролетарская, 3</ListItem>
              <ListItem>ул.Чкалова, 17/2</ListItem>
              <ListItem>г.Новополоцк ул.Молодежная, 40</ListItem>
            </List>
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
            <Typography variant="h6" component="h2">
              Склад-магазин "Полидрев"
            </Typography>

            <List>
              <ListItem>
                <b>Витебский район, аг. Октябрьская, ул.Октябрьская, 7</b>
              </ListItem>
              <ListItem>
                Время работы склад-магазина: <br />
                Пн-Пт: с 8.30 до 18.30 (без обеда) <br />
                Суббота: с 09.30 до 14.30. <br />
                Воскресенье: Выходной
              </ListItem>
            </List>
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
