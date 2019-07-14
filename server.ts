import * as http from 'http';
import App from './App';

http.createServer(App).listen(3500, () =>{
	console.log('Express server listening on port 3500');
});
