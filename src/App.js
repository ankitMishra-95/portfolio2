import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Homepage from './components/Homepage';
import Error from './components/Error';
import { Suspense, lazy } from 'react';

function App() {

  const About = lazy(() => import('./components/About.js'));
  const Work = lazy(() => import('./components/Work.js'));
  const Contact = lazy(() => import('./components/Contact.js'));

  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
        children: [
          {
              path:'/',
              element: <Homepage />,
          },
          {
              path:'/about',
              element: <Suspense fallback={"Loading..."}>
                <About />
              </Suspense>,
          },
          {
              path:'/work',
              element: <Suspense fallback={"Loading..."}>
                <Work />
              </Suspense>,
          },
          {
              path:'/contact',
              element: <Suspense fallback={"Loading..."}>
                <Contact />
              </Suspense>,
          },
        ]
    },
])
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
