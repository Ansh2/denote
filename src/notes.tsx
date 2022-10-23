import { useEffect, useState } from 'react';
import Content from './components/Content';
import noteData from "./data/notes.json";
// import regeneratorRuntime from "regenerator-runtime";
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import icon from './arrow-back-circle-outline.svg';
import { Link, useParams } from 'react-router-dom';

const ClassNotes = () => {
	const [currNotes, setNotes] = useState({});
	const params = useParams();
	const noteClass = params.class;
	// const {
	// 	transcript,
	// 	listening,
	// 	resetTranscript,
	// 	browserSupportsSpeechRecognition
	// } = useSpeechRecognition();
	// if (!browserSupportsSpeechRecognition) {
	// 	return (<span>Browser doesn&apos;t support speech recognition.</span>);
	// }
	
	useEffect(() => {
		const val = localStorage.getItem('notes');
		setNotes(!!val ? JSON.parse(val) : noteData);
		if (!val) localStorage.setItem('notes', JSON.stringify(noteData));
	}, []);

	return (
		<Content>
			<div className="flex border-b-[#E5E5E5] border-b-[3px]">
				<div className="flex flex-col border-r-[#E5E5E5] w-[800px] mb-10 border-r-[3px]">
					<Link to="/">
						<div className="mb-5 max-h-[50px] w-[150px] flex items-center space-x-[8px] cursor-pointer">
							<img src={icon} className="h-[40px]" />
							<div className="text-[#F43F5E] text-[36px] font-medium">Connections</div>
						</div>
					</Link>	
					<textarea className="min-h-[500px] w-full bg-[#262626] text-[20px] text-[#E5E5E5]" />
				</div>

				<div className="px-10 w-full">
					<div className="text-[36px] text-brand font-medium">
						{noteClass} Notes
					</div>
					{/* <div className="flex space-x-5 my-5 items-center">
						<p>Microphone: {listening ? 'on' : 'off'}</p>
						<button onClick={() => SpeechRecognition.startListening()} className="px-5 py-2 bg-brand rounded flex justify-center items-center">Start recording</button>
						<button onClick={() => SpeechRecognition.stopListening()} className="px-5 py-2 bg-brand rounded flex justify-center items-center">Stop recording</button>
						<button onClick={resetTranscript}>Reset</button>
					</div> */}
					<textarea className="min-h-[500px] w-full bg-[#262626] text-[#E5E5E5] text-[20px] pt-5" />
				</div>
			</div>
			<div>
				<div className="text-[36px] text-brand font-medium">
					Summary
				</div>
				<textarea className="min-h-[200px] w-full bg-[#262626] text-[#E5E5E5] text-[20px]" />
			</div>
			<button className="px-5 py-2 bg-brand rounded flex justify-center items-center my-[50px]">Save</button>

		</Content>
	)
}

export default ClassNotes