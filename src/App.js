import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from 'react';
import MovieList from './components/MovieList';
import {Navbar, Form, FormControl, Nav} from 'react-bootstrap';
import Filter from './components/Filter';


function App() {
  const [keyword,setKeyword] = useState("")
  const [movies,setMovies] = useState([

    { id:1,
      titre : "Top Gun : Maverick" , 
      description : "Après avoir été l’un des meilleurs pilotes de chasse de la Marine américaine pendant plus de trente ans, Pete Maverick Mitchell (Tom Cruise) continue à repousser ses limites en tant que pilote d'essai. Il refuse de monter en grade, car cela l’obligerait à renoncer à voler. Il est chargé de former un détachement de jeunes diplômés de l’école Top Gun pour une mission spéciale qu’aucun pilote n'aurait jamais imaginée. Lors de cette mission, Maverick rencontre le lieutenant Bradley “Rooster” Bradshaw (Miles Teller), le fils de son défunt ami, le navigateur Nick “Goose” Bradshaw. Face à un avenir incertain, hanté par ses fantômes, Maverick va devoir affronter ses pires cauchemars au cours d’une mission qui exigera les plus grands sacrifices.", 
      images :"https://medias.gupy.fr/2022/05/Top-Gun-Maverick-poster-2022-1653904297-400x600.jpg",
      rate:5
    },
    { id:2,
      titre : "Thor : Love and Thunder", 
      description :"Alors que Thor est en pleine introspection et en quête de sérénité, sa retraite est interrompue par un tueur galactique connu sous le nom de Gorr, qui s’est donné pour mission d’exterminer tous les dieux. Pour affronter cette menace, Thor demande l’aide de Valkyrie, de Korg et de son ex-petite amie Jane Foster, qui, à sa grande surprise, manie inexplicablement son puissant marteau, le Mjolnir. Ensemble, ils se lancent dans une dangereuse aventure cosmique pour comprendre les motivations qui poussent Gorr à la vengeance et l’arrêter avant qu’il ne soit trop tard.", 
      images :"https://medias.gupy.fr/2022/05/Thor-Love-and-Thunder-poster-2022-1652174195-400x592.jpg",
      rate:3
    },
    { id:3,
      titre : "Le Chat Potté 2 : la dernière quête", 
      description : "Le Chat Potté se rend dans un temple pour vaincre le bandit notoire El Breato et ses 40 voleurs.", 
      images : "https://medias.gupy.fr/2022/11/Le-Chat-Potte-2-la-derniere-quete-poster-2022-1669795681-400x534.jpg",
      rate:4
    },
    { id:4,
      titre : "Black Adam", 
      description :"Près de 5000 ans après avoir été doté des pouvoirs tout puissants des dieux égyptiens – et emprisonné très rapidement après – Black Adam est libéré de sa tombe terrestre, prêt à faire régner sa forme unique de justice dans le monde moderne.", 
      images :"https://medias.gupy.fr/2022/10/black-adam-400x582.jpg",
      rate:2
    }

  ]);

  const search=(e) => {setKeyword (e.target.value)}
  const [keyRate, setKeyRate] = useState(0)
  const addMovie = (nMovie) => {setMovies(movies.concat(nMovie))}

  return (
    <div className="App">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange= { search } />
          <Filter setKeyRate={setKeyRate}/>
        </Form>
      </Navbar>
      <MovieList movies={movies.filter ((el) => el.titre.toUpperCase().trim().includes (keyword.toUpperCase().trim()) && el.rate >= keyRate) } addMovie={addMovie}/> 
   </div>

  );
}

export default App;