import { HomeOutlined, RoomServiceOutlined, GroupOutlined, InfoOutlined } from '@material-ui/icons'

export const navbarLinks = [
	{
		label: 'Home',
		url: '/',
		icon: <HomeOutlined />
	},
	{
		label: 'Services',
		url: '/services',
		icon: <RoomServiceOutlined />
	},
	{
		label: 'Team',
		url: '/team',
		icon: <GroupOutlined />
	},
	{
		label: 'About',
		url: '/about',
		icon: <InfoOutlined />
	}
]
