const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/',  async (req, res) => {
    try{    
        console.log(req.session)
        const rawPosts = await Post.findAll({
        attributes: [
            'id',
            'post_url',
            'title',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
        ],
        include: [
            {
            model: Comment,
            attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
            include: {
                model: User,
                attributes: ['username']
            }
            },
            {
            model: User,
            attributes: ['username']
            }
        ]
        })
        const posts = rawPosts.map(post => post.get({plain:true}))
        // pass a single post object into the homepage template
        res.render('homepage', { posts })
    }
    catch(err) {
        console.log(err);
        res.status(500).json(err)
    }   
});

router.get('/login', (req,res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
      }
    
      res.render('login');
})

router.get('/post/:id', async (req,res) => {
    try {
        const rawPost = await Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'post_url',
            'title',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
          ],
          include: [
            {
              model: Comment,
              attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
              include: {
                model: User,
                attributes: ['username']
              }
            },
            {
              model: User,
              attributes: ['username']
            }
          ]
        });
        const post = rawPost.get({plain: true})
        res.render('single-post', { post })
    }
    catch(err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router;