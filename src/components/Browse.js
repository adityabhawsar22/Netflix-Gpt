import useNowplaying from '../Hooks/useNowplaying'
import Header from './Header'
import Maincontainer from './Maincontainer';
import Secondarycontainer from './Secondarycontainer';

const Browse = () => {
 useNowplaying();


  return (
    <div>
        <Header/>
        <Maincontainer/>
        <Secondarycontainer/>
    </div>
  )
}

export default Browse