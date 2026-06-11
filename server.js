const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());

let users=[];

app.get("/",(req,res)=>{
    res.status(200).json({
        success:true,
        message:"Backend API is running successfully"
    });
});

app.get("/api/users",(req,res)=>{
    res.status(200).json({
        success:true,
        count:users.length,
        data:users
    });
});

app.get("/api/users/:id",(req,res)=>{
    const id = Number(req.params.id);
    const user = users.find(user=>user.id===id);
    if(!user){
        return res.status(404).json({
            success:false,
            message:"User Not Found"
        });
    }

    res.status(200).json({
        success:true,
        data:user
    });

});

// create user
app.post("/api/users",(req,res)=>{
    const name = req.body?.name;
  const email = req.body?.email;


    if(!name||!email){
        return res.status(400).json({
            success:false,
            message:"Name and Email are required"
        });
    }

    const existingUser = users.find(
        user=>user.email.toLowerCase()===email.toLowerCase()
    );

    if(existingUser){
        return res.status(400).json({
            success:false,
            message:"Email already exists"
        });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);

    res.status(200).json({
        success: true,
        message: "User created successfully",
        data: newUser
    });
});


//update user
app.put("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  const name = req.body?.name;
  const email = req.body?.email;


  if (email) {
    const duplicateEmail = users.find(
      u =>
        u.email.toLowerCase() === email.toLowerCase() &&
        u.id !== id
    );

    if (duplicateEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already exists"
      });
    }
  }

  user.name = name || user.name;
  user.email = email || user.email;

  res.status(200).json({
    success: true,
    message: "User updated successfully",
    data: user
  });
});


//delete user
app.delete("/api/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  users = users.filter(user => user.id !== id);

  res.status(200).json({
    success: true,
    message: "User deleted successfully"
  });
});

//server running
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});