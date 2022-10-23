import { ReactNode } from 'react'
import Navbar from './Navbar'

interface Props {
	children?: ReactNode
}

const Content = ({ children }: Props) => {
	return (
		<div>
			<Navbar />
			<div className="max-w-[120rem] m-auto">{children}</div>
		</div>
	)
}

export default Content