const express =require('express');
const uuid = require('uuid');
const router = express.Router();
const members = require('../../Members');


// uyeler get ediliyor.
router.get('/', (req,res) =>   res.json(members));
// tek uye alma
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id ===parseInt (req.params.id));
   
   if (found){
    res.json(members.filter(member => member.id === parseInt (req.params.id)));
   } else {
       res.status(400).json({ msg : `No Member with the id of ${req.params.id}`})
   }
  
});

// uye olu;turma
router.post('/', (req,res)=> {
    // res.send(req.body); postmanda yeni uyeyi gostermeye yariyor
    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status:'active'

    }
    if(!newMember.name|| !newMember.email) {
      return res.status(400).json ({ msg:'Isim ekleyin!'});
    }
  

    members.push(newMember);
    res.json(members);
   // res.redirect('/');
});

//Uye guncelleme
router.put('/:id', (req, res) => {
    const found = members.some(member => member.id ===parseInt (req.params.id));
   
   if (found){
    const updMember = req.body;
    members.forEach(member => {
        if(member.id === parseInt(req.params.id)) {
            member.name = updMember.name ? updMember.name : member.name;
            member.email = updMember.email ? updMember.email : member.email;

            res.json({ msg: 'Uye guncellendi', member});
        }
    });
   } else {
       res.status(400).json({ msg : `No Member with the id of ${req.params.id}`});

   }
  
});
//Uye silme
router.delete('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt (req.params.id));
   
   if (found){
    res.json({ msg :' Uye silindi', members :members.filter(member => member.id !== parseInt (req.params.id))});
   } else {
       res.status(400).json({ msg : `No Member with the id of ${req.params.id}`})
   }
  
});

module.exports = router; 