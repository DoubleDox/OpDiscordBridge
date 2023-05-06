# OpDiscordBridge
Bridge from OpenProject to Discord

place config.json to folder before launching with content (example)

{
    "port" : 8080,
    "op_host": "https://YOUR_OPENPROJECT_HOST",
    "op_auth": {
        "username": "key",
        "password": "password"
    },
    "git_host": "https://YOUR_GIT_HOST(optional)",
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

