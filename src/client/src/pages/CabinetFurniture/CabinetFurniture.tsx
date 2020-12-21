import * as React from 'react';
import { Box, Container, List, ListItem, Typography } from '@material-ui/core';

import CommonFade from '../../components/common/CommonFade';
import { imgCustomCutting } from '../../assets/Images';

import { useStyles } from './CabinetFurniture.styles';

export const CabinetFurniture = (): JSX.Element => {
  const classes = useStyles();

  return (
    <CommonFade>
      <Box>
        <div
          className={classes.img}
          style={{ backgroundImage: `url(${imgCustomCutting})` }}
        />

        <Container>
          <Typography color="textPrimary" variant="body1">
            <strong> Корпусная мебель на заказ. </strong>
            Важен комфорт и уют в доме? Готовая мебель – не ваш вариант. Она не
            всегда подходит по размеру, цвету, стилю интерьера. Для
            нестандартных и малогабаритных помещений подбор готовых решений и
            вовсе квест. Если вы не хотите тратить время впустую, то стоит
            сделать мебель под заказ. Более 10 лет мы занимаемся изготовлением
            корпусной мебели по индивидуальному заказу и рады предложить своим
            клиентам следующие изделия:
          </Typography>

          <List className={classes.list}>
            <ListItem>Кухни под заказ </ListItem>
            <ListItem>Угловые кухни </ListItem>
            <ListItem>Кухни из массива </ListItem>
            <ListItem>Прямые кухни </ListItem>
            <ListItem>Кухни бюджетного варианта </ListItem>
            <ListItem>Корпусная мебель для кухни </ListItem>
            <ListItem>Кухонная мебель </ListItem>
            <ListItem>Прихожие на заказ </ListItem>
            <ListItem>Кровати-трансформеры </ListItem>
            <ListItem>Мебель-трансформер </ListItem>
            <ListItem>Изготовление торговой мебели </ListItem>
            <ListItem>Мебель для учреждений </ListItem>
            <ListItem>Корпусные шкафы-купе </ListItem>
            <ListItem>Угловая стенка - изготовление </ListItem>
            <ListItem>Гардеробные </ListItem>
            <ListItem>Мебель для ванной </ListItem>
            <ListItem>Компьютерные столы </ListItem>
            <ListItem>Шкафы-купе в спальню </ListItem>
            <ListItem>Офисная мебель </ListItem>
            <ListItem>Шкафы для офиса </ListItem>
          </List>

          <Typography color="textPrimary" variant="body1">
            <strong> Нашими силами </strong> уже оборудован не один десяток
            домов, квартир, офисов в Витебске.
            <strong> Преимущества изделий, </strong> изготовленных нашими
            сотрудниками, бесспорны:
          </Typography>

          <List>
            <ListItem>
              Богатый выбор материалов от известных производителей (МДФ, ЛДСП,
              массив).
            </ListItem>
            <ListItem>Широкая цветовая палитра. </ListItem>
            <ListItem>Качественная и надежная фурнитура. </ListItem>
            <ListItem>Быстрые сроки изготовления - от 3 дней. </ListItem>
            <ListItem>Индивидуальный подход. </ListItem>
          </List>

          <Typography color="textPrimary" variant="body1">
            <strong>Наши ключевые принципы работы </strong>– сопровождение
            проекта от разработки до установки. Взаимодействие и сотрудничество
            с клиентом у нас начинается с замеров и выезда дизайнера для
            уточнения деталей. Специалист приезжает в удобное время и предлагает
            возможные варианты обустройства офиса, жилья. Уже на первой встрече
            утверждается материал, согласовывается фурнитура, а заказчик
            получает примерный эскиз. После согласования стоимости и подписания
            договора заказ поступает в работу и в оговоренные сроки выполняется
            монтаж. Наши технологи детально проектируют изделие, тестируют его
            на прочность, надежность, не допускают брака и дефектов. Мы
            изготавливаем всю корпусную мебель под заказ (шкафы-купе, кухни,
            детские и т.п.) в установленные сроки на собственном производстве.
          </Typography>

          <Typography color="textPrimary" variant="body1">
            <strong>Гарантией </strong> финансового спокойствия и безопасности
            клиентов является договор, в котором защищены все права клиентов. Мы
            точно описываем сроки изготовления корпусной мебели под заказ, даем
            полную гарантию качества.
          </Typography>
        </Container>
      </Box>
    </CommonFade>
  );
};
