import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const pagine = [
  { nome: 'Home', percorso: '/' },
  { nome: 'Utenti', percorso: '/Users' },
  { nome: 'Prodotti', percorso: '/Prodotti' },
];

function NavbarPersonalizzata() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            {pagine.map((pagina) => (
              <NavLink
                key={pagina.nome}
                to={pagina.percorso}
                style={({ isActive }) => ({
                  textDecoration: 'none',
                  color: isActive ? 'yellow' : 'white',
                  fontWeight: isActive ? 'bold' : 'normal',
                })}
              >
                <Button color="inherit">{pagina.nome}</Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavbarPersonalizzata;
