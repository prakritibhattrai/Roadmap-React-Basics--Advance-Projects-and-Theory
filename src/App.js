import './App.css';
import AddForm from './components/AddForm';
import EditForm from './components/EditForm';
import ListLayout from './components/ListLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/" element={<ListLayout></ListLayout>} />
          <Route exact path="/add" element={<AddForm />} />
          <Route exact path="/edit/:id" element={<EditForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
