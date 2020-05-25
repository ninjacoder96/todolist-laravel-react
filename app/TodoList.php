<?php

namespace App;
use App\Task;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
class TodoList extends Model
{
    protected $table = 'todo_lists';
    protected $fillable = ['name'];

    public function setNameAttribute($value)
    {
        $this->attributes['name'] = $value;
        $this->attributes['slug'] = str_slug($value);
    }

    public function task(){
        return $this->hasMany('App\Task','list_id');
    }
}
