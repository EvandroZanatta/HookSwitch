# HookSwitch

Forward requests for webhooks to multiple URLs simultaneously

Available in [https://github.com/EvandroZanatta/HookSwitch](https://github.com/EvandroZanatta/HookSwitch)

## How to use

Make a copy of the repository on your computer (for testing) or to the server (for production).

`git clone git@github.com:EvandroZanatta/HookSwitch.git`

And then start the installation.

`npm install`

To run the project, just start the *index.js* file.

`node index.js`

*To run in a production environment, I recommend using PM2 ([https://pm2.keymetrics.io/](https://pm2.keymetrics.io/))*

## How it works

![example1](https://github.com/EvandroZanatta/HookSwitch/raw/main/views/example1.jpg)

Configure your webhook requests to be directed to the server where the HookSwitch is hosted.

In the webhook url, add the "urls" parameter and define which urls webhook requests should be sent to, separating each URL with a comma.

Example `https://domain.com/switch/?urls=url1,url2`

## Comments

The content of the POST request is replicated to the new urls with exactly the same content as the "body" and "type" of request.

In the originating service of the webhook, the url for the server where HookSwitch is installed must be configured.
