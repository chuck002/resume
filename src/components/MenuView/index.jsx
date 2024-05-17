import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import WebIcon from '@mui/icons-material/Web';
//import WysiwygIcon from '@mui/icons-material/Wysiwyg';
//import SmartScreenIcon from '@mui/icons-material/SmartScreen';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

import { htmlVersion } from '../../version/PdfVersion/pdfVersion';


export default function MenuView() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const generatePdf = async () => {
        // Crea un contenedor temporal para el HTML string
        const tempContainer = document.createElement('div');
        tempContainer.innerHTML = htmlVersion;
        document.body.appendChild(tempContainer);
        const canvas = await html2canvas(tempContainer);
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0, canvas.width / 5, canvas.height / 5);
        pdf.save('document.pdf');
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
                <WebIcon
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
                onClick={generatePdf}
            >
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PictureAsPdfIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Descargar PDF
                    </ListItemText>
                </MenuItem>
                {/*<MenuItem onClick={handleClose}>
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
                </MenuItem>*/}
            </Menu>
        </div>
    );
}