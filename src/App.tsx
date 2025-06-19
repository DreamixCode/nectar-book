import {Route, Routes} from "react-router";

import './App.css'
import {AppRoutes} from "./appRoutes.ts";
import {MainLayout} from "./layouts";
import {ContactUsPage, HomePage, NotFound} from "./pages";

function App() {
  return (
    <Routes>
      <Route path={AppRoutes.HOME} element={<MainLayout/>}>
        <Route index element={<HomePage/>} />
        <Route path={AppRoutes.CONTACT} element={<ContactUsPage/>}/>
      </Route>

      <Route path={AppRoutes.NOT_FOUND} element={<NotFound />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default App
