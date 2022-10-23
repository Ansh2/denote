import { useState, useEffect } from "react";
import Content from "./components/Content";

interface Task {
	name: string
	desc: string
}

const Tasks = () => {

	const [taskName, setName] = useState('');
	const [taskDesc, setDesc] = useState('');

	const val = localStorage.getItem('tasks');
	const [tasks, setTasks] = useState<Task[]>((!!val) ? JSON.parse(val) : []);
	if(!val) localStorage.setItem('tasks', '[]');

	const addTask = () => {
		if(taskName == '') return;
		const newTasks = [...tasks];
		newTasks.push({name: taskName, desc: taskDesc});
		setTasks(newTasks);
		setName('');
		setDesc('');
	}

	const remTask = (i: number) => {
		let newTasks = [...tasks];
		newTasks.splice(i, 1);
		setTasks(newTasks);
	}

	// useEffect(() => {
	// 	setTasks(!!val ? JSON.parse(val) : []);
	// }, []);


	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks));
	}, [tasks]);

	return (
		<Content>
			<div className="flex flex-col items-center space-y-[20px] mb-[20px]">
				<div className="font-medium text-[36px] text-[#F43F5E]">
					Tasks
				</div>
				<div className="w-[35%] h-[200px] bg-[#D9D9D9] rounded-[16px] flex flex-col items-center align-center space-y-[15px]">
					<input type="text"
						placeholder='Name'
						className="w-[80%] h-[50px] rounded-[18px] p-[10px] text-[#262626] text-[25px] mt-[10px]"
						value={taskName}
						onChange={(e) => setName(e.target.value)}
					/>
					<input type="text"
						placeholder='Description'
						className="w-[80%] h-[50px] rounded-[18px] p-[10px] text-[#262626] text-[25px]"
						value={taskDesc}
						onChange={(e) => setDesc(e.target.value)}
					/>
					<button className="px-5 py-2 bg-brand rounded-[18px] flex justify-center items-center w-[80%] h-[50px]" onClick={addTask}>Add Task</button>
				</div>
				{tasks.map((task, i) => (
					<div className="w-[35%] h-[150px] bg-[#D9D9D9] rounded-[16px] flex flex-col items-center justify-center space-y-[15px] task" key={i} onClick={() => remTask(i)}>
						<div className="text-[#F43F5E] font-medium text-[30px]">
							{task.name}
						</div>
						<div className="text-[#262626] font-regular text-[26px]">
							{task.desc}
						</div>
					</div>
				))}
			</div>
		</Content>
	)
}

export default Tasks