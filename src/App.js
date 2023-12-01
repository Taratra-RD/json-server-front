import "./App.css";
import Home from "./home/Home";
import Admin from "./components/admin/Admin";
import Auth from "./components/auth/Auth";
import Autre from "./components/autres/Autre";
import Category from "./components/category/Category";
import Email from "./components/email/Email";
import Emplacement from "./components/emplacement/Emplacement";
import Employe from "./components/employe/Employe";
import Ordinateur from "./components/ordinateur/Ordinateur";
import Proprietaire from "./components/proprietaire/Proprietaire";
import Serveur from "./components/serveur/Serveur";
import Wifi from "./components/wifi/Wifi";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormAutres from "./components/autres/form/FormAutres";
import FormCategory from "./components/category/form/FormCategory";
import FormProprietaire from "./components/proprietaire/form/FormPropretaire";
import FormEmplacement from "./components/emplacement/form/FormEmplacement";
import FormOrdinateur from "./components/ordinateur/form/FormOrdinateur";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/autres" element={<Autre />}>
            <Route path="/autres/form" element={<FormAutres />} />
          </Route>
          <Route path="/categorie" element={<Category />}>
            <Route path="/categorie/form" element={<FormCategory />} />
          </Route>
          <Route path="/email" element={<Email />} />
          <Route path="/employe" element={<Employe />} />
          <Route path="/ordinateur" element={<Ordinateur />}>
            <Route path="/ordinateur/form" element={<FormOrdinateur />} />
          </Route>
          <Route path="/proprietaire" element={<Proprietaire />}>
            <Route path="/proprietaire/form" element={<FormProprietaire />} />
          </Route>
          <Route path="/emplacement" element={<Emplacement />}>
            <Route path="/emplacement/form" element={<FormEmplacement />} />
          </Route>
          <Route path="/serveur" element={<Serveur />} />
          <Route path="/wifi" element={<Wifi />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
