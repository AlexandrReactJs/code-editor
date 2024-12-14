import './App.css';
import CodeEditor from './components/CodeEditor/CodeEditor.tsx';
import Task from './components/Task/Task.tsx';

function App() {
 


  return (
    <div className="App">
       <Task/> 
        <CodeEditor />
    </div>
  );
}

export default App;
