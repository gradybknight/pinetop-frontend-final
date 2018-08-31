import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { LinearProgress } from '../../node_modules/@material-ui/core';


const styles = {
  card: {
    width: '90vw',
    height: '50vw'
  },
  media: {
    height: '10vw',
    paddingTop: '20%', // 16:9
  },
};




function SimpleMediaCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
                MashTun
            </Typography>
            <LinearProgress variant="determinate" value={80} />
            <br />
            <Typography gutterBottom variant="headline" component="h2">
                Continuous Still
            </Typography>
            <LinearProgress variant="determinate" value={30} />
            <br />
            <Typography gutterBottom variant="headline" component="h2">
                Stripping Still
            </Typography>
            <LinearProgress variant="determinate" value={10} />
            <br />
            <Typography gutterBottom variant="headline" component="h2">
                Fractional Still
            </Typography>
            <LinearProgress variant="determinate" value={70} />
            <br />
            <Typography gutterBottom variant="headline" component="h2">
                Gin Still
            </Typography>
            <LinearProgress variant="determinate" value={10} />

        
        </CardContent>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);