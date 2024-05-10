import Skills from '../../../../assets/Data/Skills.json'
import { Card, CardContent, Typography, Grid, Tooltip } from '@mui/material';

const SkillsSection = () => {
    return (
        <>
            <Grid container spacing={3} className='Container-Card-Content-Skills'>
                {Skills.languaje.spanish.Habilidades.map((item, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h6">{item.title}</Typography>
                                    <Typography variant="body2">
                                        {Array.from(item.data).map((item2, index) => {
                                            return (
                                                <Tooltip key={index} title={item2.description} arrow>
                                                <Typography component="span">- {item2.name} <br /></Typography>
                                                </Tooltip>
                                            );
                                        })}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                }, [])}
            </Grid>
        </>
    );
};

export default SkillsSection;