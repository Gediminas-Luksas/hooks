import React from 'react';
import useResources from './useResources';

const ListResource = ({resource}) => {
	const resources = useResources(resource);

	return <ul>{resources.map(rec => <li key={rec.id}>{rec.title}</li>)}</ul>;
};

export default ListResource;
