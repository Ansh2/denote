import Content from './components/Content';
import noteData from "./data/notes.json";
import { useEffect, useState } from "react";
import { Link  } from 'react-router-dom';

function App() {
  const [currNotes, setNotes] = useState({});

	useEffect(() => {
		const val = localStorage.getItem('notes');
		setNotes(!!val ? JSON.parse(val) : noteData);
		if(!val) localStorage.setItem('notes', JSON.stringify(noteData));
	}, []);

	return (
    <Content>
      <div className="flex">
        <div className="flex flex-col border-r-[#E5E5E5] w-[550px] h-screen mb-10 border-r-[3px]">
          <div className="font-medium text-[30px]">
            subjects
          </div>
          <div className="mt-[20px] flex flex-col space-y-[25px] text-[18px] w-full">
            {Object.keys(currNotes).map((noteClass, i) => (
              <Link to={`/notes/${noteClass}`} key={i}>
                {noteClass}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Content>
	)
}

export default App;
