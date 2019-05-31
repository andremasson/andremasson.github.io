import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkillsCard from './SkillsCard';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: 30
  },
  media: {
    height: 0,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    margin: 10,
    width: 90,
    height: 90,
  },
  bioText: {
    textAlign: 'left'
  }
}));

function BioAvatar() {
  const classes = useStyles();

  return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt="André" src="https://avatars1.githubusercontent.com/u/504357?s=460&v=4" className={classes.avatar} />
    </Grid>
  );
}

function BioCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <BioAvatar />
        }
        title="Web and Mobile Developer, Game Developer"
      />
      <CardContent>
        <SkillsCard />
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent className={classes.bioText}>
          <Typography paragraph>About:</Typography>
          <Typography paragraph>
            Graduated in Computer Sciences and over 10+ years of experience as a programmer in 
            organizations ranging from medium to multi-nationals and overseas experience. 
            Passionate about programming, games and technology in general. Currently working as a freelancer mobile apps and games developer.
          </Typography>
          <Typography paragraph>
            Specialties: Mobile App development with React Native, Frontend development with React, Redux, Google Firebase, Unity3D.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default BioCard;
