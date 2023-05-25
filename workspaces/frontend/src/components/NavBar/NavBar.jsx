import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Menu from '@mui/material/Menu'

export const NavBar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static' sx={{ backgroundColor: '#fff', boxShadow: 'none' }}>
          <Toolbar>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1, color: 'black' }}>
              Diseños S.A
            </Typography>
            <div>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                sx={{ color: 'black' }}
                // onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <hr style={{ margin: '0 auto', width: '95%', borderRadius: '100%' }} />
    </>

  )
}