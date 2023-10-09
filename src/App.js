import logo from './logo.svg';
import './App.css';
import { Card, CardContent } from '@mui/material';
import { Landing } from './components/Assign31/Landing';
import { Paledrom } from './components/Assign31/Paledrom';

function App() {
  return (
   
        <Card sx={{padding:10}}>
          <CardContent>
          <Paledrom/>
          </CardContent>
        </Card>
      
  );
}

export default App;
