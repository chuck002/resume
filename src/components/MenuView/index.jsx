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
        try {
          const response = await fetch('http://localhost:3000/generate-pdf', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ html: htmlVersion })
          });
    
          if (!response.ok) {
            throw new Error('Error generating PDF');
          }
    
          const blob = await response.blob();
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'document.pdf';
          document.body.appendChild(a);
          a.click();
          a.remove();
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                onClose={handleClose}
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
                
            >
                <MenuItem 
                onClick={generatePdf}
                >
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