import { useState } from "react";
import { useNavigate } from "react-router-dom";
// @mui
import { alpha } from "@mui/material/styles";
import {
  Box,
  Divider,
  Typography,
  Stack,
  MenuItem,
  Avatar,
  IconButton,
  Popover,
  useTheme,
} from "@mui/material";
// mocks_
// import account from "../../../_mock/account";
// import { authLogOut } from "../../../Axios/ApiCall";

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: "Profile",
    icon: "eva:home-fill",
  },

  // {
  //   label: 'Profile',
  //   icon: 'eva:person-fill',
  // },
  // {
  //   label: 'Settings',
  //   icon: 'eva:settings-2-fill',
  // },
];

// ----------------------------------------------------------------------

export default function AccountPopover({ profile, setProfile }) {
  const [open, setOpen] = useState(null);

  const theme = useTheme();

  const navigate = useNavigate();

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleLogout = () => {
    // setOpen(null);
    // authLogOut().then((res) => {
    //   if (res.status === 200) {
    //     navigate("/");
    //     localStorage.clear();
    //   }
    // });
    // navigate('/login');
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            "&:before": {
              zIndex: 1,
              content: "''",
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              position: "absolute",
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }),
        }}
      >
        {/* <Avatar src={account.photoURL} alt="photoURL" /> */}
        {/* hello lakhan */}
        <img
          src="https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg"
          alt="profile"
          style={{ width: "40px", height: "40px", borderRadius: "50%" }}
        />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            borderRadius: "20px",
            "& .MuiMenuItem-root": {
              typography: "body2",
              borderRadius: 0.25,
            },
          },
        }}
      >
        <Stack sx={{ p: 1 }}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem
              key={option.label}
              onClick={() => {
                // navigate("/dashboard/app");
                setProfile(true);
                setOpen(null);
              }}
            >
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{ borderStyle: "dashed" }} />

        <MenuItem
          sx={{ color: theme.palette.primary.main, m: 1 }}
          onClick={() => handleLogout()}
        >
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}
