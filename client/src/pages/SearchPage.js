import { useParams } from 'react-router';
import Navbar from '../components/Navbar';
import Row from '../components/Row';

function SearchPage() {
  const { searchQuery } = useParams();

  return (
    <div>
      <Navbar/>
      <Row searchedMovie={searchQuery} notHomePage={true} />
    </div>
  )
}

export default SearchPage