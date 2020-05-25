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

<p><code>APP_NAME=Laravel</code></p>
<p><code>APP_ENV=local</code></p>
<p><code>APP_KEY=base64:IXwveaR4tCK9GxeuvZJCOAfqxV5fSeRnienRnGmC9eI=</code></p>
<p><code>APP_DEBUG=true</code></p>
<p><code>APP_URL=http://localhost</code></p>

<code><p>LOG_CHANNEL=stack</p></code>
<code><p>DB_CONNECTION=mysql</p></code>
<code><p>DB_HOST=127.0.0.1</p></code>
<code><p>DB_PORT=3306</p></code>
<code><p>DB_DATABASE=todo_list_react</p></code>
<code><p>DB_USERNAME=root</p></code>
<code><p>DB_PASSWORD=</p></code>

<code><p>BROADCAST_DRIVER=log</p></code>
<code><p>CACHE_DRIVER=file</p></code>
<code><p>QUEUE_CONNECTION=sync</p></code>
<code><p>SESSION_DRIVER=file</p></code>
<code><p>SESSION_LIFETIME=120</p></code>


<code><p>REDIS_HOST=127.0.0.1</p></code>
<code><p>REDIS_PASSWORD=null</p></code>
<code><p>REDIS_PORT=6379</p></code>

<code><p>MAIL_MAILER=smtp</p></code>
<code><p>MAIL_HOST=smtp.mailtrap.io</p></code>
<code><p>MAIL_PORT=2525</p></code>
<code><p>MAIL_USERNAME=null</p></code>
<code><p>MAIL_PASSWORD=null</p></code>
<code><p>MAIL_ENCRYPTION=null</p></code>
<code><p>MAIL_FROM_ADDRESS=null</p></code>
<code><p>MAIL_FROM_NAME="${APP_NAME}"</p></code>

<code><p>AWS_ACCESS_KEY_ID=</p></code>
<code><p>AWS_SECRET_ACCESS_KEY=</p></code>
<code><p>AWS_DEFAULT_REGION=us-east-1</p></code>
<code><p>AWS_BUCKET=</p></code>

<code><p>PUSHER_APP_ID=</p></code>
<code><p>PUSHER_APP_KEY=</p></code>
<code><p>PUSHER_APP_SECRET=</p></code>
<code><p>PUSHER_APP_CLUSTER=mt1</p></code>

<code><p>MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"</p></code>
<code><p>MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"</p></code>
   <br> Change the DB credentials as you like
</li>
<li>Run <code>composer install</code></li>
<li>Run npm install</li>
<li>run <code>php artisan migrate</code></li>

</ol>
</body>
</html>