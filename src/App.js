import "./App.css";
import Home from "./home/Home";
import Admin from "./components/admin/Admin";
import Auth from "./components/auth/Auth";
import Autre from "./components/autres/Autre";
import Category from "./components/category/Category";
import Proprietaire from "./components/proprietaire/Proprietaire";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormAutres from "./components/autres/form/FormAutres";
import FormCategory from "./components/category/form/FormCategory";
import FormProprietaire from "./components/proprietaire/form/FormPropretaire";
import Login from "./components/auth/signing/Login";
import Register from "./components/auth/signup/Register";
import Setting from "./home/Setting";
import Service from "./components/service/Service";
import FormService from "./components/service/form/FormService";
import ListService from "./components/service/list/ListService";
import Societe from "./components/societe/Societe";
import FormSociete from "./components/societe/form/FormSociete";
import ListSociete from "./components/societe/list/ListSociete";
import ListProprietaire from "./components/proprietaire/list/ListProprietaire";
import ListCategory from "./components/category/list/ListCategory";
import ListAutre from "./components/autres/list/ListAutre";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/auth" element={<Auth />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Route>
          <Route path="/autre" element={<Autre />}>
            <Route path="/autre/form" element={<FormAutres />} />
            <Route path="/autre/form/:id" element={<FormAutres />} />
            <Route path="/autre/list" element={<ListAutre />} />
          </Route>
          <Route path="/categorie" element={<Category />}>
            <Route path="/categorie/form" element={<FormCategory />} />
            <Route path="/categorie/form/:id" element={<FormCategory />} />
            <Route path="/categorie/list" element={<ListCategory />} />
          </Route>
          <Route path="/proprietaire" element={<Proprietaire />}>
            <Route path="/proprietaire/form" element={<FormProprietaire />} />
            <Route path="/proprietaire/list" element={<ListProprietaire />} />
            <Route
              path="/proprietaire/form/:id"
              element={<FormProprietaire />}
            />
          </Route>
          <Route path="/service" element={<Service />}>
            <Route path="/service/form" element={<FormService />} />
            <Route path="/service/list" element={<ListService />} />
            <Route path="/service/form/:id" element={<FormService />} />
          </Route>
          <Route path="/societe" element={<Societe />}>
            <Route path="/societe/form" element={<FormSociete />} />
            <Route path="/societe/list" element={<ListSociete />} />
            <Route path="/societe/form/:id" element={<FormSociete />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
