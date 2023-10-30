const express = require('express');
const router = express.Router();
const db = require('../database/connection');
require('../models/Categoria');
const Categoria = db.model('categorias');
require('../models/Produto')
const Produto = db.model('produtos');
const multer = require('multer');


//pagina index do admin
router.get('/',(req,res)=>{
    res.render('admin/index');
});

//Listando categoria
router.get('/categoria', (req, res) => {
    Categoria.find().sort({date:'desc'}).lean().then((categorias) => {
        res.render('admin/categoria', { categorias : categorias });
    }).catch((err) => {
        req.flash('error_msg', 'Houve um erro ao listar as categorias!')
        res.redirect('/admin')
    })
    
})
//Redireciona para o formulário de cadastro de categoria
router.get('/categoria/add', (req, res) => {
    res.render('admin/addCategoria')
})

//Criando nova categoria
router.post('/categoria/nova', (req, res) => {
    //validando formulário
    let erros = []
    
    if (!req.body.tipo || req.body.tipo == undefined || req.body.tipo == null ) {
        erros.push({texto: 'Tipo inválido'})
    }

    if (!req.body.sku || req.body.sku == undefined || req.body.sku == null) {
        erros.push({texto: 'SKU inválido'})
    }

    if (req.body.sku.length < 5) {
        erros.push({ texto: 'SKU deve conter mais ou 5 caracteres ex: SKU01' });
    }

    //passando erros para view addCategoria
    if (erros.length > 0) {
        res.render('admin/addCategoria', { erros: erros });
    }
    //Cria nova categoria
    else {

        const novaCategoria = {
            tipo: req.body.tipo,
            sku: req.body.sku
        }

        new Categoria(novaCategoria).save().then(() => {
            //redirecionando e mostrando msg de sucesso
            req.flash('success_msg', 'Categoria criada com Sucesso!');
            res.redirect('/admin/categoria')
        }).catch((err) => {
            //redirecionando e mostrando msg de erro
            req.flash('error_msg', 'Erro ao criar Categoria!')
            res.redirect('/admin')
        })
    }
})

//Pega categoria pelo Id para editar
router.get('/categoria/edit/:id', (req, res) => {
    //Pegando único Id com req.params
    Categoria.findOne({ _id: req.params.id }).lean().then((categoria) => {
      res.render('admin/editCategoria',{categoria: categoria})  
    }).catch((err) => {
        req.flash('error_msg', 'Houve um erro na busca da categoria para edição')
        res.redirect('/admin/categoria')
    })
})

//Recebendo a categoria editada e validando com sucesso ou erro
router.post('/categoria/edit', (req, res) => {
    Categoria.findOne({ _id: req.body.id }).then((categoria) => {
        //recebendo os dados do formulário de edição com req.body
        categoria.tipo = req.body.tipo
        categoria.sku = req.body.sku

        //Salvando a categora, exibindo mensagem de sucesso e redirecionando
        categoria.save().then(() => {
            req.flash('success_msg', 'Categoria editada com Sucesso!');
            res.redirect('/admin/categoria');
        }).catch((err) => {
            //Mostrando uma msg de erro e redirecionando
            req.flash('error_msg', 'Houve um erro interno ao salvar a categoria');
            res.redirect('/admin/categoria');
        })
    }).catch((err) => {
        //Mostrando uma msg de erro e redirecionando
        req.flash('error_msg', 'Houve um erro ao editar a categoria');
        res.redirect('/admin/categoria');
    })
})

//Deletando uma categoria pelo Id
router.post('/categoria/deletar', (req, res) => {
    //Removendo uma categoria
    Categoria.remove({ _id: req.body.id }).then(() => {
        //Mostrando uma msg de sucesso e redirecionando
        req.flash('success_msg', 'Categoria deletada com sucesso!');
        res.redirect('/admin/categoria');
    }).catch((err) => {
        //Mostrando uma msg de erro e redirecionando
        req.flash('error_msg', 'Houve um erro ao deletar a categoria');
        res.redirect('/admin/categoria');
    })
})

//Exibindo todos os produtos
router.get('/produtos', (req, res) => {
    Produto.find().sort({ date: 'desc' }).lean().then((produtos) => {
        res.render('admin/produtos',{produtos:produtos})
    }).catch((err) => {
        req.flash('error_msg', 'Houve um erro ao listar os produtos');
        res.redirect('/admin/produtos')
    })
    
})

//Exibindo o formulário de adição de produtos
router.get('/produtos/add', (req, res) => {
    Categoria.find().sort({tipo:'asc'}).lean().then((categorias) => {
        res.render('admin/addProduto',{categorias: categorias})
    }).catch((err) => {
        req.flash("error_msg", "Houve um erro ao carregar o formulário")
        res.redirect("/admin/produtos")
    })
    
})

//Configuração de armazenamento
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        //Extração da extensão do arquivo original:
        const extensaoArquivo = file.originalname.split('.')[1];
        //Cria um código randômico que seráo nome do arquivo
        const novoNomeArquivo = require('crypto')
            .randomBytes(64)
            .toString('hex');
        
        //Indica o novo nome do arquivo:
        cb(null, `${novoNomeArquivo}.${extensaoArquivo}`)
    }
});
const upload = multer({ storage });

//Adicionando produtos ao banco
router.post('/produtos/novo',upload.single('foto'), (req, res, err, next) => {
    let erros = [];
    if (req.body.categoria == '0') {
        console.log('Este campo é inválido', err.campo)
        next(err)
        erros.push({text: "Categorias não registradas, registre alguma"})
    }
    if (erros.length > 0) {
        res.render('admin/produtos',{erros: erros})
    } else {
        const novoProduto = {
            nome: req.body.nome,
            preco:req.body.preco,
            descricao: req.body.conteudo,
            img_produto: req.body.img_produto,
            categoria: req.body.categoria
        
        }
        new Produto(novoProduto).save().then(() => {
            req.flash('success_msg', 'Produto adicionado com sucesso!');
            res.redirect('/admin/produtos')
        }).catch((err) => {
            req.flash('error_msg', 'Houve um erro ao adiconar o novo produto!');
            res.redirect('/admin/produtos');
        })
        
    }
})

module.exports = router;