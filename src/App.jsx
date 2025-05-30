
import Header from "../components/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from "../layouts/DefaultLayout"
import HomePage from "../pages/HomePage"
import FilmPage from "../pages/FilmPage"
import NotFoundPage from "../pages/NotFoundPage"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/films/:id" element={<FilmPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>  {/*Scrivere il path cosi "*" perche prende qualsiasi rotta e resituisce la componente. Va messa sempre alla fine*/}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
