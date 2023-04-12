import {
	Dashboard,
	EditBudget,
	EditTask,
	ViewAllTrips,
	ViewBudget,
	ViewSingleTrip,
	ViewTask
} from 'views/pages';

const mainRoutes = {
	path: '/',
	children: [
		{
			path: '/dashboard',
			element: <Dashboard />
		},
		{
			path: '/view-trips',
			element: <ViewAllTrips />
		},
		{
			path: '/view-trip/:id',
			element: <ViewSingleTrip />,
			children: [
				{
					path: '/view-tasks',
					element: <ViewTask />
				},
				{
					path: '/view-tasks/:id',
					element: <EditTask />
				},
				{
					path: '/view-budget',
					element: <ViewBudget />
				},
				{
					path: '/view-budgets/:id',
					element: <EditBudget />
				}
			]
		}
	]
};

export default mainRoutes;
