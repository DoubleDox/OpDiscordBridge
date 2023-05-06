const App = require('./app_helper').App;
const config = require('./config.json');
const app = new App(config);
require('./ophook').Init(app);

app.Start();