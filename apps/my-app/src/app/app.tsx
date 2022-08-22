import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './layout';
import Homepage from './pages/homepage';

export function App() {
  return (
    <Router>
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      {/* </Layout> */}
    </Router>
  );
}

export default App;
