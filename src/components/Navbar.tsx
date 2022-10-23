import { NavLink } from "react-router-dom"
import logo from '../logo.svg';

const Navbar = () => {
  return (
	<div className="max-w-[120rem] m-auto flex h-[100px] w-full">
		<div className="w-full flex justify-between items-center z-10">
			<div>
				<NavLink to="/">
					{/* eslint-disable-next-line */}
					<a >
						<img src={logo} className="h-[30px]" alt="logo" />
					</a>
				</NavLink>
			</div>
			
			<div className="mr-[50px] text-[25px] font-normal">
				<ul className="flex space-x-[100px]">
					{/* eslint-disable-next-line */}
					<a>
						<NavLink to="/">
							<li className={(window.location.pathname == '/tasks') ? '' : 'active'}>notes</li>
						</NavLink>
					</a>
					<a>
						<NavLink to="/tasks">
							<li className={(window.location.pathname == '/tasks') ? 'active' : ''}>tasks</li>
						</NavLink>
					</a>
				</ul>
			</div>
			
		</div>
	</div>
  )
}

export default Navbar