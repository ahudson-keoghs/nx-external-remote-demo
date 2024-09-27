import { FC } from 'react';
import Container from '@mui/material/Container';
import { Paper, Typography } from '@mui/material';

const HelloWorld: FC = () => {
  return (
    <Container>
      <Paper sx={{ margin: 3 }}>
        <Typography variant="h2" component="div">
          Hello World! from the remote app!
        </Typography>
      </Paper>
    </Container>
  );
};

export default HelloWorld;
