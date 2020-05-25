<?php

namespace App;
use App\TodoList;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['list_id','task_name'];

    public function task(){
        return $this->belongsToMany('App\TodoList');
    }


}
