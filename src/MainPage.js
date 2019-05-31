import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TopBar from './TopBar';
import BioCard from './BioCard';

function MainPage() {
  return (
    <div>
      <CssBaseline />
      <TopBar />
      <Container maxWidth="md">
        <BioCard />
      </Container>
    </div>
  );
}

export default MainPage;