import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import WebIcon from '@mui/icons-material/Web';
import WysiwygIcon from '@mui/icons-material/Wysiwyg';
import SmartScreenIcon from '@mui/icons-material/SmartScreen';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

export default function MenuView() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <WebIcon />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <WebIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Vista Page
                    </ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <WysiwygIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Vista LandPage
                    </ListItemText>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <SmartScreenIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Vista WebApp
                    </ListItemText>
                </MenuItem>
            </Menu>
        </div>
    );
}