import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
  const { classes, arrayOfParagraphs, img } = props;
    let imgPath = `/images/${img}`;
    console.log(props.arrayOfParagraphs)
    // arrayOfParagraphs && arrayOfParagraphs.map(lineItem => console.log(lineItem));
    arrayOfParagraphs.map(lineItem => console.log(lineItem));
    console.log(props.sample);
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={imgPath}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.headline}
          </Typography>
          {arrayOfParagraphs.map(lineItem => 
            (
              <Typography component="p" key={lineItem.id}>
                {lineItem.text}
              </Typography>
            )
          )}
        </CardContent>
        <Button size='small' color='primary' onClick={props.onPreviousClick}>
            previous
        </Button>
        <Button size='small' color='primary' onClick={props.onStartClick}>
            start
        </Button>
        <Button size='small' color='primary' onClick={props.onNextClick}>
            next
        </Button>
      </Card>
    </div>
  );
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);