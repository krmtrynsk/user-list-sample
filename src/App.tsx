import './App.css';
import { UserList } from './components/UserList';
import { Box } from '@mui/material';

function App() {
  return (
    <>
      <Box sx={{ border: 2 }}>
        <UserList />
      </Box>
    </>
  );
}

export default App;
