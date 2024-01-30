import { NavLink as RouterLink } from "react-router-dom";
// @mui
import { Box, List, ListItemText } from "@mui/material";
//
import { StyledNavItem, StyledNavItemIcon } from "./Style";
import { colorCodes } from "../../Helper/Constant";

// ----------------------------------------------------------------------

export default function NavSection({ data = [], ...other }) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

function NavItem({ item }) {
  const { title, path, icon, info } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      // onClick={() => alert("title", title)}
      sx={{
        "&.active": {
          color: colorCodes.PRIMARY_COLOR,
          bgcolor: "action.selected",
          fontWeight: "fontWeightBold",
          "& $icon": {
            fill: colorCodes.PRIMARY_COLOR, // Set the fill color for the icon
          },
        },
      }}
    >
      <StyledNavItemIcon>{icon && <>{icon}</>}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  );
}
