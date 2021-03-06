import * as React from 'react';
import {
  Box,
  Button,
  Container,
  List,
  ListItem,
  Typography,
} from '@material-ui/core';

import CommonFade from '../../components/common/CommonFade';
import img from '../../assets/images/forest-1607774432667-4004.jpg';

import { useStyles } from './Home.styles';

export const Home = (): JSX.Element => {
  const classes = useStyles();

  return (
    <CommonFade>
      <Box className={classes.main}>
        <Container>
          <Typography variant="body1">
            <strong>Главной целью ООО «ПЭП «Полидрев» </strong> является
            предоставление людям недорогой, удобной, комфортной и красивой
            мягкой мебели, подходящей также и для малометражных квартир.
          </Typography>
          <Typography variant="body1">
            <strong>Ассортимент мягкой мебели </strong> обладает высоким
            качеством. Мебельные материалы – обивочные ткани и мебельные
            кожзаменители, применяемые для обивки, обладают высокой прочностью,
            стойкостью к истиранию. Срок службы мягкой мебели не менее 10 лет,
            гарантийный срок службы – 18 месяцев.
          </Typography>
          <Typography variant="body1">
            <strong>Мебель надежна и безопасна в эксплуатации</strong>, что
            подтверждается Декларацией о соответствии ЕАЭС N RU
            Д-BY.МН33.В.00539 от 20.03.2018 года. Механизмы разборки
            диван-кроватей, а также кресел-кроватей выполнены таким образом,
            чтобы быть достаточно простыми и надежными. Конструкция мебели
            обеспечивает полную безопасность: мягкие углы мебели, все соединения
            сделаны очень устойчиво.
          </Typography>
          <Typography variant="body1">
            ООО «ПЭП «Полидрев» реализует мягкую мебель через торговые
            предприятия г.Витебска и Витебской области:
          </Typography>
          <List>
            <ListItem>
              ОАО «Витебский Хозторг» в г.Витебск и в г.Новополоцк
            </ListItem>
            <ListItem>ОАО «Дом торговли» г.Полоцк</ListItem>
            <ListItem>ООО «БелАртМебель»</ListItem>

            <ListItem>Торговый Дом «Витязь»</ListItem>
            <ListItem>магазин «Игрушка»</ListItem>
          </List>

          <Typography variant="body1">
            На предприятии работает <strong> склад-магазин </strong>
            <br />
            <Button href="tel:+375(33)675-54-75">8-(033)675-54-75,</Button>
            <Button href="tel:+375(29)127-55-54">8-(029)-127-55-54,</Button>
            <Button href="tel:+375(29)652-71-51">8-(029)652-71-51,</Button>
            <Button href="tel:+375(0212)29-16-98">8-(0212)-29-16-98.</Button>
            <br />
            <Button href="mailto:polidrev.vitebsk@yandex.ru">
              Polidrev.vitebsk@yandex.ru
            </Button>
            <br />
            Время работы склад-магазина: Пн-Пт с 8.30 до 18.30 (без обеда),
            <br />
            Суббота с 09.30 до 14.30. Выходной - Воскресенье.
          </Typography>
          <Typography variant="body1">
            Покупатель также может обратиться непосредственно на предприятие и
            заказать любое изделие в индивидуальном порядке: выбрать вид
            материала обивки, а также цвет обивки, размеры.
            <strong>Оплата производится: </strong> за наличный расчет, через
            платежный терминал - по карточке, в безналичном порядке через
            систему «Расчет» (ЕРИП), либо через интернет-банк (Произвольный
            платеж). Работаем по картам рассрочек "Халва", "Карта покупок",
            "KartoFUN".
          </Typography>
        </Container>

        <div
          className={classes.img}
          style={{ backgroundImage: `url(${img})` }}
        />
      </Box>
    </CommonFade>
  );
};
