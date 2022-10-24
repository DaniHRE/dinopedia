import { useEffect, useState } from 'react';
import axios from 'axios';

interface Dinosaur {
  id: number;
  nome: string;
  clado: string;
  filo: string;
  genero: string;
  reino: string;
  familia: string;
  subFamilia: string;
  image: string;
  category: number;
}

export function Home() {
  const [data, setData] = useState<Dinosaur>();
  const url = 'http://localhost:8000/api/';

  useEffect(() => {
    axios.get(`${url}dinosaur/`)
      .then(response => {
        setData(response.data);
        console.log(response.data)
      })
      .catch(error => console.error(`Error: ${error}`));
  }, []);

  if(data === undefined){
    return(<div>Loading</div>)
  }

  return (
    <div className="Home">
      <h1>Dinopedia</h1>
      <ul>
        {JSON.stringify(data)}
      </ul>
    </div>
  )
}
