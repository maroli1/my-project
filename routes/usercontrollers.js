const users = [
    { id: 1, name: "Maryam" },
    { id: 2, name: "Ali" }
];

function getUsers(req, res) {
    res.json(users);
}

function addUser(req, res) {
    res.send("User added!");
}

function updateUser(req, res) {
    res.send("User updated!");
}

function deleteUser(req, res) {
    res.send("User deleted!");
}

module.exports = { getUsers, addUser, updateUser, deleteUser };