import { NavLink } from "react-router-dom"
import logo from '../logo.svg';

const Navbar = () => {
  return (
	<div className="max-w-[120rem] m-auto flex h-[100px] w-full">
		<div className="w-full flex justify-between items-center z-10">
			<div>
				<NavLink to="/">
					<a >
						<img src={logo} className="h-[30px]" />
					</a>
				</NavLink>
			</div>
			
			<div className="mr-[50px] text-[25px] font-normal">
				<ul className="flex space-x-[100px]">
					<a>
						<NavLink to="/">
							<li className="active">notes</li>
						</NavLink>
					</a>
				</ul>
			</div>
			
		</div>
	</div>
  )
}

export default Navbar