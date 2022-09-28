const { mygroup } = require('../Models/models.group');

function getMessageGroupMember(req, res) {
    const id = Number(req.params.id);
    for (let m = 0; m < mygroup.length; m++) {
        if (mygroup[mi].id == id) {
            res.send('<html><body><ul><li>' + mygroup[m].name + '</li></ul></body></html>');
            return;
        }
    }
    res.send('not valid');
}

function getAllMessageGroupMember(req, res) {
    res.write('<html><body><ul>')
    for (let m = 0; m < mygroup.length; m++) {
        res.write('<li>' + mygroup[m].name + '</li>')
    }
    res.write('</ul></body></html>')
    res.send();
}

module.exports = {
    getMessageGroupMember,
    getAllMessageGroupMember
}