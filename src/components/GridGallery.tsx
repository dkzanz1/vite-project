import React, { Suspense } from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const Container = styled(Grid)({
        padding: '20px',
    });

const Box = styled(Paper)( {
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        transition:'transform 0.2s',
        '&:hover': {
        transform: 'scale(1.05)',
    },
});



// const items: string[] = ['item1', 'item2', 'item3','item4','item5','item6'];
const images:{ src: string; title: string }[] = [
    { src: 'src/assets/images/image5.png',  title: 'item1'},
    { src: 'src/assets/images/image6.png',  title: 'item2'},
    { src: 'src/assets/images/image7.png',  title: 'item3'},
    { src: 'src/assets/images/image8.png',  title: 'item4'},
    { src: 'src/assets/images/image9.png',  title: 'item5'},
    { src: 'src/assets/images/image10.png', title: 'item6'},
    { src: 'src/assets/images/image11.png', title: 'item7'},
    { src: 'src/assets/images/image12.png', title: 'item8'},
    { src: 'src/assets/images/image13.png', title: 'item9'},
    { src: 'src/assets/images/image13.png', title: 'item10'},
    { src: 'src/assets/images/image11.png', title: 'item11'},
    { src: 'src/assets/images/image13.png', title: 'item12'},
    { src: 'src/assets/images/image13.png', title: 'item13'},
    { src: 'src/assets/images/image13.png', title: 'item14'},
    { src: 'src/assets/images/image13.png', title: 'item15'},
    { src: 'src/assets/images/image13.png', title: 'item16'},  
];

const LazyImage = React.lazy(() => import('./LazyImage'));

const GridGallery: React.FC = () => {
    return (
        <Container container spacing={3}>
            {images.map((image, index)=> (
            <Grid item xs={12} sm={6} md={3} key={index}>
                <Box elevation={3}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyImage src={image.src} alt={image.title} />
                    </Suspense>
                    {/* <img src={image.src} alt={image.title} style={{ width: '60%', height: 'auto'}}/> */}
                    <Typography variant="h6">{image.title}</Typography>
                </Box>
            </Grid>
    ))}
        </Container>
    );
};


export default GridGallery;