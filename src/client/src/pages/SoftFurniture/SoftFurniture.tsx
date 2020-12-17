import * as React from 'react';
import CommonFade from '../../components/common/CommonFade';
import ScrollableTabs from '../../components/common/ScrollableTabs';
import { Box } from '@material-ui/core';
import { imgPr2 } from '../../assets/Images';
import { useStyles } from './SoftFurniture.styles';

export const SoftFurniture = () => {
  const classes = useStyles();

  return (
    <CommonFade>
      <Box>
        <div
          className={classes.img}
          style={{ backgroundImage: `url(${imgPr2})` }}
        />

        <ScrollableTabs />
      </Box>
    </CommonFade>
  );
};
