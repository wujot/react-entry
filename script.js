var movies = [
  {
    id: 1,
    title: 'The Godfather',
    desc: 'Opowieść o nowojorskiej rodzinie mafijnej. Starzejący się Don Corleone pragnie przekazać władzę swojemu synowi.',
    image: "https://ssl-gfx.filmweb.pl/po/10/89/1089/7196615.2.jpg",
    year: 1972
  },
  {
    id: 2,
    title: 'Forrest Gump',
    desc: 'Historia życia Forresta, chłopca o niskim ilorazie inteligencji z niedowładem kończyn, który staje się miliarderem i bohaterem wojny w Wietnamie.',
    image: "https://ssl-gfx.filmweb.pl/po/09/98/998/7314731.2.jpg",
    year: 1994
  },
  {
  	id: 3,
  	title: 'The Shawshank Redemption',
  	desc: 'Adaptacja opowiadania Stephena Kinga. Niesłusznie skazany na dożywocie bankier, stara się przetrwać w brutalnym, więziennym świecie.',
  	image: "https://ssl-gfx.filmweb.pl/po/10/48/1048/6925401.2.jpg",
  	year: 1994
  },
  {
  	id: 4,
  	title: 'The Green Mile',
  	desc: 'Emerytowany strażnik więzienny opowiada przyjaciółce o niezwykłym mężczyźnie, którego skazano na śmierć za zabójstwo dwóch 9-letnich dziewczynek.',
  	image: "https://ssl-gfx.filmweb.pl/po/08/62/862/7517878.2.jpg",
  	year: 1999
  },
  {
  	id: 5,
  	title: 'Schindlers List',
  	desc: 'Historia przedsiębiorcy Oskara Schindlera, który podczas II wojny światowej uratował przed pobytem w obozach koncentracyjnych 1100 Żydów.',
  	image: "https://ssl-gfx.filmweb.pl/po/12/11/1211/7254286.2.jpg",
  	year: 1993
  }
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id},
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.year),
      React.createElement('p', {}, movie.desc),
      React.createElement('img',{src: movie.image})
    );
});

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));