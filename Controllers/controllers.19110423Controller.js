const { mygroup } = require('../Models/models.group');

function getGroupMember(req, res) {
    const id = Number(req.params.id);
    var m;
    for (let k = 0; k < mygroup.length; k++) {
        if (mygroup[k].id == id) {
            m = mygroup[k];
        }
    }
    if (m) {
        res.status(200).json(m);
    }
    else {
        res.send('not valid');
    }
}

function addNewMember(req, res) {
    const member = ['19110472', '19110436'];
    const m = { id: req.body.id, name: req.body.name };
    if (!member.includes(m.id.toString())) {
        res.send('not valid')
    }
    else {
        mygroup.push(m);
        res.status(200).json(mygroup)
    }
}

module.exports = {
    getGroupMember,
    addNewMember
}