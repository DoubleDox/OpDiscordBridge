# OpDiscordBridge
Bridge from OpenProject to Discord

1. Generate Discord webhook for channel (**webhook** field in config)
2. Generate api key to access Open Project (**op_auth** field in config)
3. place config.json to script folder with example content:
```
{
    "port" : 8080,
    "op_host": "https://YOUR_OPENPROJECT_HOST",
    "op_auth": {
        "username": "key",
        "password": "password"
    },
    "users":
    {
        "USER_OP_ID":"USER_DISCORD_ID"
    },
    "projects" :
    [
        {
            "name":"PROJECT_NAME",
            "op_id": PROJECT_ID_IN_OP,
            "webhook":"https://discord.com/api/webhooks/YOUR_DISCORD_WEBHOOK"
        }
    ]
}
```
4. launch with NodeJS script app.js. If OP auth setup is corect, script should load list of the current opened work packages.
5. Setup webhook in Open Project for work package "create" and "update" events, leading to http(s)://YOUR_OPDISCORDBRIDGE:port/ophook
