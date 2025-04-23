// import { useState } from 'react';
// import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button } from '@mui/material';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import { useNavigate } from 'react-router-dom';  
// import { useAuthStore } from '../store/useAuthStore';  
// import { userSignOut } from '../firebase';  

// const Header = () => {
//   const navigate = useNavigate();  
//   const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); 
//   const { user, profile, clearUser } = useAuthStore(); 
//   const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);  
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);  
//   };

//   const handleLogOut = async () => {
//     await userSignOut();  
//     clearUser(); 
//     navigate('/login');  
//   };

//   function handleClose(p0: string): void {
//     throw new Error('Function not implemented.');
//   }

//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           My Application
//         </Typography>

//         {user ? (
//           <div>
//             <IconButton
//               size="large"
//               edge="end"
//               color="inherit"
//               onClick={handleMenuOpen}  
//             >
//               <AccountCircle />
//             </IconButton>
//             <Menu
//               anchorEl={anchorEl}
//               open={Boolean(anchorEl)}
//               onClose={handleMenuClose}
//             >
//             {!profile && <MenuItem onClick={() => handleClose('/create-profile')}>Create profile</MenuItem>
//           }


//               <MenuItem onClick={() => navigate('/')}>Home</MenuItem>  
//               <MenuItem onClick={() => navigate('/create-post')}>Create Post</MenuItem> 
//               <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem> 

//               {!profile && (
//                 <MenuItem onClick={() => navigate("/create-profile")}>Create Profile</MenuItem>
//               )}

//               <MenuItem onClick={handleLogOut}>Logout</MenuItem>  
//             </Menu>
//           </div>
//         ) : (
//           <div>
//             <Button color="inherit" onClick={() => navigate('/login')}>Login</Button> 
//             <Button color="inherit" onClick={() => navigate('/register')}>Register</Button>  
//           </div>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;



import { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';  
import { useAuthStore } from '../store/useAuthStore';  
import { userSignOut } from '../firebase';  

const Header = () => {
  const navigate = useNavigate();  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); 
  const { user, profile, clearUser } = useAuthStore(); 
  
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);  
  };

  const handleMenuClose = () => {
    setAnchorEl(null);  
  };

  const handleLogOut = async () => {
    await userSignOut();  
    clearUser(); 
    navigate('/login');  
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Application
        </Typography>

        {user ? (
          <div>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              onClick={handleMenuOpen}  
            >
              <AccountCircle />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => navigate('/')}>Home</MenuItem>  
              <MenuItem onClick={() => navigate('/add-post')}>Create Post</MenuItem> 
              <MenuItem onClick={() => navigate('/profile')}>Profile</MenuItem> 

              {/* {!profile && (
                <MenuItem onClick={() => navigate("/create-profile")}>Create Profile</MenuItem>
              )} */}

              <MenuItem onClick={handleLogOut}>Logout</MenuItem>  
            </Menu>
          </div>
        ) : (
          <div>
            <Button color="inherit" onClick={() => navigate('/login')}>Login</Button> 
            <Button color="inherit" onClick={() => navigate('/register')}>Register</Button>  
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
