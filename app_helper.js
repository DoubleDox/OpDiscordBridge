var fs = require('fs');

class App 
{
    constructor(config)
    {
        this.express = require('express');
        this.server = this.express();
        
        let cors = config.cors ? require('cors') : null;
        let bodyParser = require("body-parser");
        if (cors != null)
            this.server.use(cors({origin: '*'}));
        this.server.use(bodyParser.urlencoded({ extended: false }));
        this.server.use(bodyParser.json());
        this.config = config;
        
        this.server.get('/version', async (req, res) =>
        {
            res.setHeader("content-type", "text/html");
            res.send(this.version);
        });

        if (fs.existsSync(__dirname + '/version.txt'))
            this.version = fs.readFileSync(__dirname + '/version.txt').toString();
    }

    AuthRequired(res)
    {
        res.status(403).send("{ statusCode : -1, errorMessage : 'AuthRequired'}");
    }

    Start()
    {
        let port = this.config.port;
        this.server.listen(port, () => 
        {
            console.log(this.config.name + ` service listening on port ${port}`)
        });        
    }
}

exports.App = App;