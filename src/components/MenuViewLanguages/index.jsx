import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import LanguageIcon from '@mui/icons-material/Language';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { LanguajeContext } from '../../context/LanguajeContext';
import { useContext, useState } from 'react';

export default function MenuViewLanguajes() {

    const { languaje, toggleLanguaje } = useContext(LanguajeContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const toggleLanguajeSpanish = () => {
        toggleLanguaje('spanish')
        setAnchorEl(null);
    };
    const toggleLanguajeEnglish = () => {
        toggleLanguaje('english')
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }


    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}

            >
                <LanguageIcon
                    sx={{ color: 'black' }}
                />
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
                <MenuItem onClick={toggleLanguajeSpanish}>
                    <ListItemIcon>
                        🇦🇷
                    </ListItemIcon>
                    <ListItemText>
                        Español
                    </ListItemText>
                </MenuItem>
                <MenuItem onClick={toggleLanguajeEnglish}>
                    <ListItemIcon>
                        🇺🇸
                    </ListItemIcon>
                    <ListItemText>
                        English
                    </ListItemText>
                </MenuItem>
            </Menu>
        </div>
    );
}