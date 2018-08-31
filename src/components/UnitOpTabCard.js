import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GraphArea from './GraphArea';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function PaperSheet(props) {
  const { classes } = props;

  let toBeGraphed=[];
  toBeGraphed.push(props.graphData);


  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          {props.headline}
        </Typography>
        <Typography component="p">
          The column temperature is currently {props.lastTemperature} Celsius
        </Typography> 
        <GraphArea graphData={toBeGraphed} />
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);


// export default withStyles(styles)(connect())(PaperSheet);