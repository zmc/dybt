import add from 'date-fns/add'
import format from 'date-fns/format';

import IconButton from '@material-ui/core/IconButton';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import style from './style.css';

export default function DateAdjuster ({date, setDate}) {
  const formatted_date = format(date, "yyyy-MM-dd");
  const addDay = (i) => setDate(add(date, {days: i}));
  return (
    <Box className={style.adjuster}>
      <IconButton
        onClick={() => { addDay(-1) }}
      >
        <ArrowLeftIcon />
      </IconButton>
      <Typography
        variant="h5"
        component="span"
        className={style.date}
      >
        {formatted_date}
      </Typography>
      <IconButton
        onClick={() => { addDay(1) }}
      >
        <ArrowRightIcon />
      </IconButton>
    </Box>
  )
};
