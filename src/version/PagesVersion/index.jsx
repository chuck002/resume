import PageNavBar from '../../components/PageNavBar';
import './PagesVersion.css';
import Avatar from '@mui/material/Avatar';
import img from '../../../src/assets/perfil_blog.jpg';
import PageFooter from '../../components/PageFooter';
import { Card, CardContent, Typography } from '@mui/material';
import Home from '../../assets/Data/Home.json';

function PageVersion() {

    return (
        <>
            <PageNavBar />
            <div className='Container-Title-Index'>
                        <Typography variant="h4" gutterBottom >
                            {Home.spanish.about.title}
                        </Typography>
            <Card className='Container-Card-Index'>
                <CardContent className='Container-Card-Content-Index'>
                   
                    <div className='Container-Avatar'>
                        <Avatar alt="Javy Luna" src={img} sx={{ width: 200, height: 200 }} />
                    </div>
                    <Typography variant="span">
                        {Home.spanish.about.text}
                    </Typography>
                </CardContent>
            </Card>
            </div>

            <PageFooter />
        </>
    );
}

export default PageVersion;