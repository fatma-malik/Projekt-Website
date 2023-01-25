const express = require('express')
var cors = require('cors')
const app = express()
const bodyParser = require('body-parser');

// Bücher Liste
let books = [{
  name: "Love from a to z",
  genre: "Romance",
  stars: 1,
  picture: "https://m.media-amazon.com/images/I/71TksBXSXNL.jpg"
}, {
    name: "The spanish love deception",
    genre: "Romance",
    stars: 3,
    picture: "https://images.thalia.media/-/BF2000-2000/767af4f8d2994221b028493fe87f0423/the-spanish-love-deception-taschenbuch-elena-armas-englisch.jpeg"
  }, {
    name: "Dear enemy",
    genre: "Romance",
    stars: 2,
    picture: "https://images.thalia.media/07/-/08a13b1bb3e847a68036d55de72923dd/dear-enemy-taschenbuch-kristen-callihan.jpeg"
  }, {
    name: "Terms and Conditions",
    genre: "Romance",
    stars: 5,
    picture: "https://m.media-amazon.com/images/I/5130uTTtuAL._AC_SY780_.jpg"
  }, {
    name: "The fine print",
    genre: "Romance",
    stars: 5,
    picture: "https://images.thalia.media/-/BF2000-2000/94907c04fcc24cbead457046b9887e06/the-fine-print-taschenbuch-lauren-asher-englisch.jpeg"
  }, {
    name: "Maddest Obsession",
    genre: "Romance",
    stars: 4,
    picture: "http://cdn.shopify.com/s/files/1/0458/6386/2439/products/61sMjGl_vsL.jpg?v=1631701411"
  }, {
    name: "Sweetest Obliviona",
    genre: "Romance",
    stars: 5,
    picture: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1528339619i/39083635.jpg"
  }, {
    name: "Redeemed",
    genre: "Romance",
    stars: 4,
    picture: "https://images.thalia.media/-/BF2000-2000/dd9066452c3d4e07bdb3fba352c901e7/redeemed-special-edition-taschenbuch-lauren-asher-englisch.jpeg"
  }, {
    name: "Wrecked",
    genre: "Romance",
    stars: 2,
    picture: "https://m.media-amazon.com/images/I/61G1VtY3cHS.jpg"
  }, {
    name: "Collided",
    genre: "Romance",
    stars: 4,
    picture: "https://images.thalia.media/-/BF2000-2000/b00949d5a7fc4e29ab8a925b54f97f62/collided-special-edition-taschenbuch-lauren-asher-englisch.jpeg"
  }, {
    name: "Throttled",
    genre: "Romance",
    stars: 5,
    picture: "https://images.thalia.media/-/BF2000-2000/809dcd3b99f04381a28fe3d5415c66ba/throttled-special-edition-taschenbuch-lauren-asher-englisch.jpeg"
  }, {
    name: "Twisted Lies",
    genre: "Romance",
    stars: 5,
    picture: "https://images.thalia.media/-/BF2000-2000/12d2ec6caa6d411e87ac2681d35add22/twisted-lies-taschenbuch-ana-huang-englisch.jpeg"
  }, {
    name: "Twisted Games",
    genre: "Romance",
    stars: 5,
    picture: "https://images.thalia.media/-/BF2000-2000/f0a0c2a0a76f4a7ebbced7791b320eec/twisted-games-special-edition-taschenbuch-ana-huang-englisch.jpeg"
  }, {
    name: "Twisted Love",
    genre: "Romance",
    stars: 3,
    picture: "https://images.thalia.media/07/-/db0b3061f23c49ce9e301536939487a5/twisted-love-special-edition-taschenbuch-ana-huang-englisch.jpeg"
  }, {
    name: "Twisted Hate",
    genre: "Romance",
    stars: 1,
    picture: "https://images.thalia.media/-/BF2000-2000/6a24d3a955854d5cb9b5fc02be5520f1/twisted-hate-special-edition-taschenbuch-ana-huang-englisch.jpeg"
  }, {
    name: "Love hypothesis",
    genre: "Romance",
    stars: 3,
    picture: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1611937942l/56732449.jpg"
  }, {
    name: "The Deal",
    genre: "Romance",
    stars: 3,
    picture: "https://images.thalia.media/-/BF2000-2000/d07f800a9ee44ac98bd2fb5087ac72d1/the-deal-taschenbuch-elle-kennedy-englisch.jpeg"
  }, 

  {
    name: "Hunger Games",
    genre: "Dystopian",
    stars: 4,
    picture: "https://images.thalia.media/07/-/6b9d99927c504934bc35a6144864cc41/the-hunger-games-hunger-games-book-one-taschenbuch-suzanne-collins-englisch.jpeg"
  },{
    name: "Hunger Games 2",
    genre: "Dystopian",
    stars: 4,
    picture: "https://images.thalia.media/00/-/8ec8966e6a234ce1a1f2e5edb98194d3/catching-fire-hunger-games-book-two-volume-2-taschenbuch-suzanne-collins-englisch.jpeg"
  },{
    name: "Hunger Games 3",
    genre: "Dystopian",
    stars: 4,
    
    picture: "https://images.thalia.media/07/-/dd67bf3750bb44e9a814fbd0da1bbc60/mockingjay-hunger-games-book-three-volume-3-taschenbuch-suzanne-collins-englisch.jpeg"
  }, {
    name: "Maze runner",
    genre: "Dystopian",
    stars: 5,
    picture: "https://whatshotblog.com/wp-content/uploads/2014/09/unnamed.jpg.webp"
  },{
    name: "Maze runner 2",
    genre: "Dystopian",
    stars: 4,
    picture: "https://images.thalia.media/00/-/6de9c0bf7f3a48df9fc801c3e8a8206c/maze-runner-2-the-scorch-trials-taschenbuch-james-dashner-englisch.jpeg"
  },{
    name: "Maze runner 3",
    genre: "Dystopian",
    stars: 3,
    picture: "https://i.weltbild.de/p/maze-runner-the-death-cure-291776208.jpg?v=2&wp=_max"
  }, {
    name: "Haunting Adeline",
    genre: "Dystopian",
    stars: 4,
    picture: "https://images.thalia.media/07/-/14528bb1606c41cc9fa04cb4ee3dd72b/haunting-adeline-taschenbuch-h-d-carlton-englisch.jpeg"
  }, {
    name: "Hunting Adeline",
    genre: "Dystopian",
    stars: 5,
    picture: "https://images.thalia.media/-/BF2000-2000/3e86ec38ad254944aa5b9227dcc0c247/hunting-adeline-taschenbuch-h-d-carlton-englisch.jpeg"
  }, {
    name: "Divergent",
    genre: "Dystopian",
    stars: 3,
    picture: "https://images.thalia.media/-/BF2000-2000/2c8cc3d8983f48809424a97aca6d2c58/divergent-taschenbuch-veronica-roth-englisch.jpeg"
  }, 

  {
    name: "Ugly Love",
    genre: "Contemporary",
    stars: 3,
    picture: "https://images.thalia.media/-/BF2000-2000/65396c6ab4454f5c9317d9bfd183c403/ugly-love-taschenbuch-colleen-hoover-englisch.jpeg"
  }, {
    name: "It ends with us",
    genre: "Contemporary",
    stars: 3,
    picture: "https://images.thalia.media/-/BF2000-2000/9c9a615db45246fa98ae16c7a37121ce/it-ends-with-us-taschenbuch-colleen-hoover-englisch.jpeg"
  }, {
    name: "It starts with us",
    genre: "Contemporary",
    stars: 2,
    picture: "https://images.thalia.media/07/-/903e6460c0cb47fda16dc15a7828c811/it-starts-with-us-epub-colleen-hoover.jpeg"
  }, {
    name: "The hating game",
    genre: "Contemporary",
    stars: 3,
    picture: "https://images.thalia.media/-/BF2000-2000/1d55abde0a7d4a9b980477d1c400af10/the-hating-game-taschenbuch-sally-thorne-englisch.jpeg"
  }, {
    name: "How to kill your family",
    genre: "Contemporary",
    stars: 3,
    picture: "https://images.thalia.media/07/-/cd3a6dd2457d40ed93aaa0b581c01061/how-to-kill-your-family-taschenbuch-bella-mackie-englisch.jpeg"
  }, {
    name: "The song of achilles",
    genre: "Contemporary",
    stars: 5,
    picture: "https://assets.thalia.media/img/artikel/a46ad02ca2885e27342815430ef634e72f4de0bc-00-00.jpeg"
  }, {
    name: "The seven Husbands of Evelyn Hugo",
    genre: "Contemporary",
    stars: 4,
    picture: "https://images.thalia.media/-/BF2000-2000/19614b492b764745ade3ec849728b267/the-seven-husbands-of-evelyn-hugo-epub-taylor-jenkins-reid.jpeg"
  }, {
    name: "Where the crawdads sing",
    genre: "Contemporary",
    stars: 4,
    picture: "https://images.thalia.media/-/BF2000-2000/4cf7c5d867ab4a3c9ba896a48d0c5e0d/where-the-crawdads-sing-gebundene-ausgabe-delia-owens-englisch.jpeg"
  }, {
    name: "The thursday murder Club",
    genre: "Contemporary",
    stars: 2,
    picture: "https://images.thalia.media/-/BF2000-2000/2b75ac1dc3d4430fa63316b0a473fad2/osman-r-thursday-murder-club-taschenbuch-richard-osman-englisch.jpeg"
  }, {
    name: "Normal People",
    genre: "Contemporary",
    stars: 3,
    picture: "https://kbimages1-a.akamaihd.net/7b72b4d9-506e-4eaa-9398-b59ec37d3b39/1200/1200/False/normal-people.jpg"
  }, {
    name: "Midnight Library",
    genre: "Contemporary",
    stars: 4,
    picture: "https://images.thalia.media/-/BF2000-2000/2770485732a44b548d95e80fe611ddb7/the-midnight-library-taschenbuch-matt-haig-englisch.jpeg"
  }
];

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// serves all the files from the "frontend" folder automatically
app.use(express.static('frontend'));

// listens to HTTP POST request on the route /new_book, as generated by the html form on the "newBook" page
app.post("/new_book", (req, res) => {
  console.log("got request for a new book!")
  let formName = req.body.formName
  let formGenre = req.body.formGenre
  let formStars = req.body.formStars
  let picture = req.body.picture
  console.log(req.body)
  console.log("name: " + formName)
  console.log("genre: " + formGenre)
  console.log("stars: " + formStars)
  console.log("picture: " + picture)

  let book = {
    name: formName,
    genre: formGenre,
    stars: formStars,
    picture: picture
  }

  books.push(book);
  res.statusCode = 200;
  res.redirect("http://127.0.0.1:5500/frontend/Genre.html");
})

app.get("/books",(req,res) => {
  res.send(JSON.stringify(books));
});

app.listen(8080);
console.log(new Date + " Server listening on port 8080");