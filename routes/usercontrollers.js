const fs = require("fs");
const path = require("path");
const usersPath = path.join(__dirname, "../data/users.json");
const getUsers = (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersPath));
    res.json(users);
};

const addUser = (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersPath));
    const newUser = { id: Date.now(), ...req.body };
    users.push(newUser);
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
    res.status(201).json(newUser);
};

const updateUser = (req, res) => {
    const users = JSON.parse(fs.readFileSync(usersPath));
    const id = parseInt(req.params.id);
    const index = users.findIndex(u => u.id === id);
    if (index !== -1) {
        users[index] = { ...users[index], ...req.body };
        fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
        res.json(users[index]);
    } else {
        res.status(404).json({ message: "کاربر پیدا نشد" });
    }
};

const deleteUser = (req, res) => {
    let users = JSON.parse(fs.readFileSync(usersPath));
    const id = parseInt(req.params.id);
    users = users.filter(u => u.id !== id);
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
    res.json({ message: "کاربر حذف شد" });
};

module.exports = { getUsers, addUser, updateUser, deleteUser };