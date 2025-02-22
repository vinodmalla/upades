import './App.css';

import About from './Componenets/About';
import Experience from './Componenets/Experience';
import Certificates from './Componenets/Certificates';
import Languages from './Componenets/Languages';
import Acadamics from './Componenets/Acadamics';
import Contact from './Componenets/Contact';
import Header from './Header';


import { createBrowserRouter,Outlet } from 'react-router-dom';
import Pavan from './Pavan';

function App() {
  return (
    <div className="App">
      <Header />

      <Outlet />


    </div>
  );
}
export const approuter=createBrowserRouter([
  {
    path:"/",
    element:<App />,

    children:[
      {
        path:"/",
        element:<>
        <Pavan />
        </>
       
      },
      {
        path:"/about",
        element:<About />,
      },{
        path:"/experience",
        element:<Experience />,

      },{
        path:"/certificates",
        element:<Certificates />,
        
      },{
        path:"/languages",
        element:<Languages />,
        
      },{
        path:"/acdamics",
        element:<Acadamics />,
        
      },{
        path:"/contact",
        element:<Contact />,
        
      }
    ]

}
])

export default App;

