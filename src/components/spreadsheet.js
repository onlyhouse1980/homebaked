import useGoogleSpreadsheet from 'use-google-spreadsheet';

const SomeComponent = ({}) => {
	const API_KEY = 'AIzaSyC3ZC7NoYXlwR9vMmXqZ-xnkKpT5uEV97c';
	const shareUrl = 'https://docs.google.com/spreadsheets/d/1xXDmQLBVK2eqA17N70iTxHmTTQUC4_l0H5tw74SPoSI/edit?usp=sharing';
	const { rows, isFetching } = useGoogleSpreadsheet(shareUrl, API_KEY);
	return isFetching ? (
		<Spinner />
	) : rows ? (
		<ul>
			{rows.map((row, i) => {
				return (
					<li key={i}>
						{Object.keys(row).map((key, i) => (
							<span key={i}>
								{key}: {row[key]}
								<br />
							</span>
						))}
					</li>
				);
			})}
		</ul>
	) : (
		<span>No Data</span>
	);
};