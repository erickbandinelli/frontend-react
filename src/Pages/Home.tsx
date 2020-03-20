import React from 'react';
import Header from '../Components/Header';
import DataTable from '../Components/DataTable';

type TypeDataTable = {
    qtn: string
}

const Home: React.FC<TypeDataTable> = () => {

	return (
		<>
			<Header />
            <DataTable qtn="10" />
		</>
	)
}

export default Home
