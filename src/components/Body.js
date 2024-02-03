import Browse from './Browse';
import { createBrowserRouter, useNavigate } from 'react-router-dom';
import Login from './Login'
import { RouterProvider } from 'react-router-dom';

const Body = () => {


  const appRouter= createBrowserRouter(
    [
   { path:"/",
    element:<Login/>  },
{
  path:"/Browse",
  element:<Browse/>
}

    ]);

  

  return (
    <div>

<RouterProvider router={appRouter}/>

    </div>
  )
}

export default Body