import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="bg-zinc-900 h-screen text-white">
      <h1 className='text-center translate-y-6'>CRUD App - Redux Toolkit - jaden-smb</h1>
      <div className='flex items-center justify-center h-full'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/create-task" element={<TaskForm />} />
            <Route path="/edit-task/:id" element={<TaskForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
