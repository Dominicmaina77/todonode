const express = require("express");

const router = express.Router();
const Todo = require("../models/Todo");

// define routes
router.post("/", async (req, res) => {
  try {
    const todo = new Todo({
      title: req.body.title,
      completed: false,
    });
    await todo.save();
    res.status(201).json(todo);
  } catch (err) {
    res.status(400).json({ message: err.message });
    console.error(err);
  }
});

// get todos
router.get('/', async (req,res)=>{
    try{
        const todos = await Todo.find();
        res.json(todos);
    }catch(err){
        res.status(500).json({message:err.message});
        console.error(err);
    }
});

// update todo
router.patch('/:id', async (req,res)=>{
    try{

        const todo= await Todo.findById(req.params.id);
        if(!todo){
            return res.status(404).json({message:"Todo not found"});
        }
        todo.completed = req.body.completed;
        await todo.save();
        res.json(todo);
    } catch(err){
        res.status(400).json({message:err.message});
        console.error(err);
    }
    
});

// delete todo
router.delete('/:id', async (req,res)=>{
    try{
        const todo= await Todo.findById(req.params.id);
        if(!todo){
            return res.status(404).json({message:"Todo not found"});
        }
        await todo.remove();
        res.json({message:"Todo deleted"});
    } catch(err){
        res.status(500).json({message:err.message});
        console.error(err);
    }
});
module.exports = router;