import { Grid, Typography } from '@material-ui/core';
import Languages from '../Languages';


function GridLanguages() {
    return (
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Typography variant="h4">Seleciona Tu Idioma / Choose Your Language</Typography>
            </Grid>
            <Grid item xs={12}>
                <div>
                    <Languages src="https://w7.pngwing.com/pngs/105/707/png-transparent-flag-of-england-flag-of-the-united-kingdom-handshaking-s-english-flag-rectangle.png" alt="English Version" title="English version" />
                    <Languages src="https://thumbs.dreamstime.com/b/bandera-de-espa%C3%B1a-icono-brillante-cuadrado-en-un-fondo-blanco-123821686.jpg" alt="Spanish Version" title="Spanish Version" />
                </div>

            </Grid>
        </Grid>
    );
}

export default GridLanguages;