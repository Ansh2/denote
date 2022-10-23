import Content from './components/Content';
import noteData from "./data/notes.json";
import { useEffect, useState } from "react";
import { Link  } from 'react-router-dom';

function App() {
  const [currNotes, setNotes] = useState<any>({});
  const [subjectName, setSubject] = useState('');

	useEffect(() => {
		const val = localStorage.getItem('notes');
		setNotes(!!val ? JSON.parse(val) : noteData);
		if(!val) localStorage.setItem('notes', JSON.stringify(noteData));
	}, []);

  const addSubject = () => {
    if(currNotes[subjectName]) return;
    const newNotes = {...currNotes};
    newNotes[subjectName] = {
      name: subjectName,
      notes: "sample notes here",
      connections: "sample connections here",
      summary: "sample summary here"
    }
    setSubject('');
    setNotes(newNotes);
  }

  useEffect(() => {
		if(Object.keys(currNotes).length === 0) return;
    localStorage.setItem('notes', JSON.stringify(currNotes));
  }, [currNotes]);

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
          <div className="flex flex-col w-full mt-[30px]">
              <input type="text"
                placeholder='Subject Name'
                className="w-[50%] h-[40px] rounded-[10px] p-[10px] text-[#262626]"
                value={subjectName}
                onChange={(e) => setSubject(e.target.value)} />
              <button className="px-5 py-2 bg-brand rounded-[10px] flex justify-center items-center w-[50%] mt-[10px]" onClick={addSubject} >Add Subject</button>
          </div>
        </div>
      </div>
    </Content>
	)
}

export default App;
