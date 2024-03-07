import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar } from '@mui/material';
// utils
import { bgBlur } from '../../Theme/utils/cssStyles';

//
import SearchIcon from '@mui/icons-material/Search';
import AccountPopover from './AccountPopover';
import NotificationsPopover from './NotificationsPopover';
import { useState } from 'react';
import ProfileModal from './ProfileModal';

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
    ...bgBlur({ color: theme.palette.background.default }),
    boxShadow: 'none',
    [theme.breakpoints.up('lg')]: {
        width: `calc(100% - ${NAV_WIDTH + 1}px)`,
    },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    minHeight: HEADER_MOBILE,
    [theme.breakpoints.up('lg')]: {
        minHeight: HEADER_DESKTOP,
        padding: theme.spacing(0, 5),
    },
}));

// ----------------------------------------------------------------------



export default function Header() {

    const [profile, setProfile] = useState(false)
    return (
        <StyledRoot>
            <StyledToolbar shadow={1}>


                {/* <SearchIcon size="small" sx={{ color: "#000000" }} /> */}
                <span></span>
                <Box sx={{ flexGrow: 1, }} />

                <Stack
                    direction="row"
                    alignItems="center"
                    spacing={{
                        xs: 0.5,
                        sm: 1,
                    }}
                >

                    <NotificationsPopover />
                    <AccountPopover profile={profile} setProfile={setProfile} />
                    <ProfileModal profile={profile} setProfile={setProfile} />
                </Stack>
            </StyledToolbar>
        </StyledRoot>
    );
}
