import React, {useState} from 'react';
import ListResource from './ListResource';

const App = () => {
	const [resource, setResource] = useState('posts');
	return (
		<div>
			<div>
				<button onClick={() => setResource('posts')}>Posts</button>
				<button onClick={() => setResource('todos')}>Todos</button>
			</div>
			<ListResource resource={resource} />
		</div>
	);
};

export default App;
