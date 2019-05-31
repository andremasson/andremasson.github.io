import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import StarHalf from '@material-ui/icons/StarHalfOutlined';

const skills = [
  {name: 'C#', score: 4},
  {name: 'Javascript', score: 4.5},
  {name: 'React', score: 3},
  {name: 'React Native', score: 3},
  {name: 'Flutter', score: 3},
  {name: 'Unity 3D', score: 3.5},
  {name: 'PHP', score: 3},
  {name: 'Arduino', score: 2.5},
];

function RenderStars({score}) {
  let children = [];
  for (let i = 0; i < 5; i++) {
    if (score > i && score < i+1) {
      children.push(<StarHalf key={i} fontSize='small' />);
    } else if (score > i) {
      children.push(<Star key={i} fontSize='small' />);
    } else {
      children.push(<StarBorder key={i} fontSize='small' />);
    }
  }
  return children;
}

function Skill({name, score}){
  return (
    <Box>
      <Typography variant="overline">
        {name}
      </Typography>
      <Typography variant="body2">
        <RenderStars score={score} />
      </Typography>
    </Box>
  );
}

function SkillsCard() {
  return (
    <Box>
      <Grid 
        container 
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        {skills.map((skill, idx) => (
          <Grid item xs='auto' sm={4} key={idx}>
            <Skill name={skill.name} score={skill.score} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default SkillsCard;
