import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import InputFileUpload from './InputFileUpload';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const top100Films = [
  // ... (o array foi mantido igual)
];

const options = ['Grafico', 'Linhas', 'Estrofes', 'Avaliação'];

const ITEM_HEIGHT = 48;

const drawerWidth = 240;

const WhiteLongMenu = styled(IconButton)({
  color: 'white',
});

const MailBadge = () => (
  <Badge badgeContent={4} color="primary" sx={{ marginLeft: 'auto' }}>
    <MailIcon color="inherit" />
  </Badge>
);

// Componente LongMenu
const LongMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const customTheme = createTheme({
    palette: {
      mode: 'light', // ou 'dark' conforme o seu tema
    },
    components: {
      MuiAutocomplete: {
        defaultProps: {
          renderOption: (props, option, state, ownerState) => (
            <Box
              sx={{
                borderRadius: '8px',
                margin: '5px',
                [`&.${ownerState.classes.option}`]: {
                  padding: '8px',
                },
              }}
              component="li"
              {...props}
            >
              {ownerState.getOptionLabel(option)}
            </Box>
          ),
        },
      },
    },
  });

  return (
    <>
      <WhiteLongMenu
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </WhiteLongMenu>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
        <ThemeProvider theme={customTheme}>
          <Stack spacing={5} sx={{ width: 300 }}>
            {/* You can add additional components here */}
          </Stack>
        </ThemeProvider>
      </Menu>
    </>
  );
};

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar style={{ backgroundColor: '#2C516B' }} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ color: 'white', marginRight: 2 }}>
            M.i - Analisador de Dados
          </Typography>
          <LongMenu />
          <Box sx={{ flexGrow: 1 }} />
          <Stack spacing={1} sx={{ width: 300, marginRight: '16px' }}>
            <Autocomplete
              options={top100Films}
              getOptionLabel={(option) => option.title}
              id="disable-close-on-select"
              disableCloseOnSelect
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Projeto 1"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '4px',
                      backgroundColor: 'white',
                      '& fieldset': {
                        borderColor: 'white',
                      },
                    },
                    '& input': {
                      paddingRight: '32px',
                      color: 'black',
                    },
                  }}
                />
              )}
            />
          </Stack>
          <MailBadge />
          <Stack direction="row" spacing={2}>
            <Box width={1} />
            <Avatar alt="Karl" src="/static/images/avatar/1.jpg" />
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Inicio', 'Gerenciamento',].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <Divider />
          <List>
            <ListItem>
              <ListItemButton>
                <InputFileUpload onFileUpload={() => {}} onExcelRead={() => {}} style={{ backgroundColor: '#2C516B', color: '#FFFFFF' }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
