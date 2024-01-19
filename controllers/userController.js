const User = require('../models/users');

//rediriger vers homme
exports.home = (req , res)=>{
    res.render('index');
}


//create user
exports.addUser = (req , res)=>{
    const _user = new User({
        nom :req.body.nom ,
        email : req.body.email,
        numero :req.body.numero
    });
    _user.save()
        .then((result)=>{
            res.redirect('show_user');
        })
        .catch((error)=>{
            console.log(error);
        })
}


//pour afficher user
exports.showUser = (req , res)=> {
   User.find()
    .then(user=> {
        res.render('show_user' , {user});
    })

    .catch((error)=>{
        console.log(error)
    })
}


//pour supprimmer
exports.deleteUser = (req , res) =>{
    let id = req.params.id ;
    User.deleteOne({_id : id})
        .then((result) =>{
            res.redirect('/show_user')
        })
        .catch((error)=>console.log(error))
}

//pour afficher la pages edit
exports.editUser =(req, res)=>{
    let id = req.params.id ;
    User.findOne({_id: id})
        .then(result =>{
            res.render('edit' , {user : result})
        })
        .catch((error) =>{
            console.log(error)
        })

}

//pour modifier user
exports.updateUser = (req , res) =>{
    let id = req.params.id ;
    User.updateOne({_id : id} , req.body)
        .then(result =>{
            res.redirect('show_user')
        })
        .catch(error => console.log(error))
}