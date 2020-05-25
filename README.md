<html>
<head>
</head>
<body>
<h1>Todo list using laravel + ReactJS</h1>
<h2>Functionalities</h2>
<ul>
    <li>Add List with database</li>
    <li>Edit List with database</li>
    <li>Display List with database</li>
    <li>Delete List (Unfinished)</li>
    <li>Add Task with database</li>
    <li>Display Task with database</li>
    <li>Edit/Done Task (Unfinished)</li>
    <li>Delete Task (Unfinished)</li>
</ul>
<h3>How to Run Locally</h3>
<ol>
    <li>initialize <code>git init</code> on your working directory</li>
    <li>type git remote add origin <span>https://github.com/ninjacoder96/todolist-laravel-react.git</span></li>
    <li>After running the command, create .env file</li>
    <li> Copy the following
    APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:IXwveaR4tCK9GxeuvZJCOAfqxV5fSeRnienRnGmC9eI=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=todo_list_react
DB_USERNAME=root
DB_PASSWORD=

BROADCAST_DRIVER=log
CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379

MAIL_MAILER=smtp
MAIL_HOST=smtp.mailtrap.io
MAIL_PORT=2525
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS=null
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"
    Change the DB credentials as you like
</li>
<li>Run <code>composer install</code></li>
<li>Run npm install</li>
<li>run <code>php artisan migrate</code></li>

</ol>
</body>
</html>