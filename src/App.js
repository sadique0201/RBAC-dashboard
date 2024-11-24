import React from 'react';
import { CssBaseline, Container, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import UserList from './components/UserList';
import RoleList from './components/RoleList';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NavBar />
      <Container>
        <Typography variant="h1" gutterBottom>RBAC Dashboard</Typography>
        <UserList />
        <RoleList />
      </Container>
    </ThemeProvider>
  );
};

export default App;
