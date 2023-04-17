// mui imports
import { Grid } from '@mui/material';

// project imports
import MainNav from 'views/components/specific/MainNav';
import Footer from 'views/components/specific/Footer';
import AuthLayout from 'views/pages/auth/AuthLayout';

import { UnderConstruction } from 'views/pages';

const AuthMain = () => {
	// *using to disable app/features while I refactor and enhance app
	const underConstruction = process.env.NODE_ENV === 'development' ? false : true;
	const lastModifiedDate = '04/16/2023';
	return (
		<Grid
			container
			sx={{ justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw' }}
		>
			<Grid item xs={12}>
				<MainNav underConstruction={underConstruction} />
			</Grid>
			<Grid item xs={12}>
				{underConstruction ? (
					<UnderConstruction lastModifiedDate={lastModifiedDate} />
				) : (
					<AuthLayout />
				)}
			</Grid>
			<Grid item xs={12}>
				<Footer />
			</Grid>
		</Grid>
	);
};

export default AuthMain;
