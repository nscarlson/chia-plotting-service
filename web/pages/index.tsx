import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box, Button, Grid, TextField } from '@mui/material'

const Home = () => (
    <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="initial-scale=1, width=device-width" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                    <Box sx={{ minHeight: '700px', width: 600, backgroundColor: '#eeeeee' }}></Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: '700px',
                            width: 600,
                        }}
                    >
                        <p>Plot Config</p>

                        <TextField label="Farmer Public Key" margin="dense" variant="outlined" />
                        <TextField label="Pooling Key" margin="dense" variant="outlined" />

                        <Button
                            sx={{
                                margin: '3px 0px 3px 0px',
                            }}
                            variant="outlined"
                        >
                            Submit
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    </div>
)

export default Home
