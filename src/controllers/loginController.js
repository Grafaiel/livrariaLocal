const Login = require('../models/login');

exports.index = (req, res) => {
    if(req.session.user) return res.render('login-logado', { title: 'Logado'});
    res.render('login', {title: 'Entrar ou Criar conta'});
};

exports.create = async function (req, res) {
    try {
        const login = new Login(req.body);
        await login.create();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('back');
            });

            return;
        }
        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.save(function () {
            return res.redirect('back');
        });
    } catch (e) {
        console.log(e);
        return res.render('404', {title: 'Erro'});
    }
};

exports.login = async function (req, res) {
    try {
        const login = new Login(req.body);
        await login.login();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('back');
            });

            return;
        }
        
        req.flash('success', 'Você entrou no modo Moderador da Livraria.');
        req.session.user = login.user;
        req.session.save(function () {
            return res.redirect('back');
        });
    } catch (e) {
        console.log(e);
        return res.render('404', {title: 'Erro'});
    }
};

exports.logout = function (req,res) {
    req.session.destroy();
    res.redirect('/');
}