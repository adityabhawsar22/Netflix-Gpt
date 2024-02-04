import useNowplaying from '../Hooks/useNowplaying'
import usePopularmovies from '../Hooks/usePopularmovies';
import useToprated from '../Hooks/useToprated';
import useUpcoming from '../Hooks/useUpcoming';
import Header from './Header'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';

const Browse = () => {
 useNowplaying();
usePopularmovies();
useToprated();
useUpcoming();
  return (
    <div>
        <Header/>
        <Maincontainer/>
        <Secondarycontainer/>
    </div>
  )
}

export default Browse