const App = require('./app_helper').App;
const app = new App({ port : 8410 });
require('./ophook').Init(app);

app.Start();