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
    <li>Add Task with database</li>
    <li>Display Task with database</li>
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

<p><code>LOG_CHANNEL=stack</code></p>
<p><code>DB_CONNECTION=mysql</code></p>
<p><code>DB_HOST=127.0.0.1</code></p>
<p><code>DB_PORT=3306</code></p>
<p><code>DB_DATABASE=todo_list_react</code></p>
<p><code>DB_USERNAME=root</code></p>
<p><code>DB_PASSWORD=</code></p>

<p><code>BROADCAST_DRIVER=log</code></p>
<p><code>CACHE_DRIVER=file<</code></p>
<p><code>QUEUE_CONNECTION=sync</code></p>
<p><code>SESSION_DRIVER=file</code></p>
<p><code>SESSION_LIFETIME=120<</code></p>


<p><code>REDIS_HOST=127.0.0.1</code></p>
<p><code>REDIS_PASSWORD=null</code></p>
<p><code>REDIS_PORT=6379</code></p>

<p><code>MAIL_MAILER=smtp</code></p>
<p><code>MAIL_HOST=smtp.mailtrap.io</code></p>
<p><code>MAIL_PORT=2525</code></p>
<p><code>MAIL_USERNAME=null</code></p>
<p><code>MAIL_PASSWORD=null</code></p>
<p><code>MAIL_ENCRYPTION=null</code></p>
<p><code>MAIL_FROM_ADDRESS=null</code></p>
<p><code>MAIL_FROM_NAME="${APP_NAME}"</code></p>

<p><code>AWS_ACCESS_KEY_ID=</code></p>
<p><code>AWS_SECRET_ACCESS_KEY=</code></p>
<p><code>AWS_DEFAULT_REGION=us-east-1</code></p>
<p><code>AWS_BUCKET=</code></p>

<p><code>PUSHER_APP_ID=</code></p>
<p><code>PUSHER_APP_KEY=</code></p>
<p><code>PUSHER_APP_SECRET=</code></p>
<p><code>PUSHER_APP_CLUSTER=mt1</code></p>

<p><code>MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"</code></p>
<p><code>MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"</code></p>
   <br> Change the DB credentials as you like
</li>
<li>Run <code>composer install</code></li>
<li>Run npm install</li>
<li>run <code>php artisan migrate</code></li>

</ol>
</body>
</html>