import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog,
	HiClipboard
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: ' Incoming Products',
		label: 'Incoming Products',
		path: '/products',
		icon: <HiClipboard />
	},
	{
		key: 'Del',
		label: 'delivery',
		path: '/delivery',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'Return',
		label: 'Return',
		path: '/return',
		icon: <HiOutlineUsers />
	},
	{
		key: 'transaction',
		label: 'Transaction',
		path: '/transaction',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'messages',
		label: 'Messages',
		path: '/messages',
		icon: <HiOutlineAnnotation />
	}
,
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
