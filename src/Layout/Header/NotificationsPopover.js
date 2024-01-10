import { useState } from "react";
// @mui
import {
  Box,
  List,
  Badge,
  Button,
  Avatar,
  Tooltip,
  Divider,
  Popover,
  Typography,
  IconButton,
  ListItemText,
  ListSubheader,
  ListItemAvatar,
  ListItemButton,
} from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { AppStrings, colorCodes } from "../../Helper/Constant";
import { Navigate, useNavigate } from "react-router";
// utils
// components
// import Iconify from "../../../components/iconify";
// import Scrollbar from "../../../components/scrollbar";

// ----------------------------------------------------------------------

const NOTIFICATIONS = [
  {
    id: 1,
    title: "Your order is placed",
    description: "waiting for shipping",
    avatar: null,
    type: "order_placed",
    // createdAt: set(new Date(), { hours: 10, minutes: 30 }),
    isUnRead: true,
  },
  {
    id: 2,
    title: "laxman Nemane",
    description: "answered to your comment on the Minimal",
    avatar: "/assets/images/avatars/avatar_2.jpg",
    type: "friend_interactive",
    // createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
    isUnRead: true,
  },
];

export default function NotificationsPopover() {
  const [notifications, setNotifications] = useState(NOTIFICATIONS);
  const navigate = useNavigate();

  const totalUnRead = notifications?.filter(
    (item) => item.isUnRead === true
  ).length;

  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({
        ...notification,
        isUnRead: false,
      }))
    );
  };

  return (
    <>
      <IconButton
        color={open ? "primary" : "default"}
        onClick={handleOpen}
        sx={{ width: 40, height: 40, margin: "0 5px" }}
      >
        <Badge badgeContent={totalUnRead} color="error">
          <NotificationsNoneOutlinedIcon />
        </Badge>
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            mt: 1.5,
            ml: 0.75,
            width: 360,
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 2.5 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle1">
              {AppStrings.notification}
            </Typography>
          </Box>

          {totalUnRead > 0 && (
            <Tooltip title=" Mark all as read">
              <IconButton color="primary" onClick={handleMarkAllAsRead}>
                {/* <Iconify icon="eva:done-all-fill" /> */}
              </IconButton>
            </Tooltip>
          )}
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Box sx={{ height: { xs: 340, sm: "auto" } }}>
          <List
            disablePadding
            subheader={
              <ListSubheader
                disableSticky
                sx={{ py: 1, px: 2.5, typography: "overline" }}
              >
                New
              </ListSubheader>
            }
          >
            {notifications?.slice(0, 2).map((notification) => (
              <NotificationItem
                key={notification.id}
                notification={notification}
              />
            ))}
          </List>
        </Box>

        <Divider sx={{ borderStyle: "dashed" }} />

        <Box sx={{ p: 1 }}>
          <Button
            fullWidth
            disableRipple
            sx={{
              background: colorCodes?.PRIMARY_COLOR_200,
              color: colorCodes?.PRIMARY_COLOR,
            }}
            onClick={() => navigate("/notifications")}
          >
            View All
          </Button>
        </Box>
      </Popover>
    </>
  );
}

// ----------------------------------------------------------------------

function NotificationItem({ notification }) {
  const { avatar, title } = renderContent(notification);

  return (
    <ListItemButton
      sx={{
        py: 1.5,
        px: 2.5,
        mt: "1px",
        ...(notification.isUnRead &&
          {
            // bgcolor: "action.",
          }),
      }}
    >
      <ListItemAvatar>
        <Avatar sx={{ bgcolor: "background.neutral" }}>{avatar}</Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={title}
        secondary={
          <Typography
            variant="caption"
            sx={{
              mt: 0.5,
              display: "flex",
              alignItems: "center",
              color: "text.disabled",
            }}
          >
            nothing
          </Typography>
        }
      />
    </ListItemButton>
  );
}

// ----------------------------------------------------------------------

function renderContent(notification) {
  const title = (
    <Typography variant="subtitle2">
      {notification.title}
      <Typography
        component="span"
        variant="body2"
        sx={{ color: "text.secondary" }}
      >
        {/* &nbsp; {noCase(notification.description)} */}
      </Typography>
    </Typography>
  );

  if (notification.type === "order_placed") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/assets/icons/ic_notification_package.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "order_shipped") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/assets/icons/ic_notification_shipping.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "mail") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/assets/icons/ic_notification_mail.svg"
        />
      ),
      title,
    };
  }
  if (notification.type === "chat_message") {
    return {
      avatar: (
        <img
          alt={notification.title}
          src="/assets/icons/ic_notification_chat.svg"
        />
      ),
      title,
    };
  }
  return {
    avatar: notification.avatar ? (
      <img alt={notification.title} src={notification.avatar} />
    ) : null,
    title,
  };
}
