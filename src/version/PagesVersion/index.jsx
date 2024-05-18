import PageNavBar from '../../components/PageNavBar';
import PageNavBarMovil from '../../components/PageNavBarMovil';
import './PagesVersion.css';
import Avatar from '@mui/material/Avatar';
import PageFooter from '../../components/PageFooter';
import { Card, CardContent, Typography } from '@mui/material';
import Home from '../../assets/Data/Home.json';
import { useContext } from 'react';

import { LanguajeContext } from '../../context/LanguajeContext';

function PageVersion() {

    const { languaje, toggleLanguaje } = useContext(LanguajeContext);

    return (
        <>
            <div className='PageNavBarMovil'>
                <PageNavBarMovil />
            </div>
            <div className='PageNavBar'>
                <PageNavBar />
            </div>


            <div className='Container-Title-Index'>
                <Typography variant="h4" gutterBottom >
                    {Home[languaje].about.title}
                </Typography>
                <Card className='Container-Card-Index'>
                    <CardContent className='Container-Card-Content-Index'>

                        <div className='Container-Avatar'>
                            <Avatar alt={Home[languaje].image.alt} src={Home[languaje].image.url} sx={{ width: 200, height: 200 }} />
                        </div>
                        <Typography variant="body1" component="p">
                            {Home[languaje].about.text}
                        </Typography>
                    </CardContent>
                </Card>
            </div>

            <PageFooter />
        </>
    );
}

export default PageVersion;