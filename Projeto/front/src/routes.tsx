import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import Home from "./components/home/Home";
import ListarCarro from "./components/carro/ListarCarro";
import ListarManutencao from "./components/manutencao/ListarManutencao";
import ListarCliente from "./components/cliente/ListarCliente";


const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" 
                    element={
                        <>
                            <Navbar />
                            <Home />
                        </>
                    } />
                
                <Route path="/login"
                    element={
                        <>
                            <Navbar />
                            <Login />
                        </>
                    } />
                <Route path="/register"
                    element={
                        <>
                            <Navbar />
                            <Register />
                        </>
                    } />
                <Route path="/listarcarros"
                    element={
                        <>
                            <Navbar />
                            <ListarCarro />
                        </>
                    } />
                <Route path="/listarmanutencoes"
                    element={
                        <>
                            <Navbar />
                            <ListarManutencao />
                        </>
                    } />
                <Route path="/listarcliente"
                    element={
                        <>
                            <Navbar />
                            <ListarCliente />
                        </>
                    } />
                <Route path="/cadastrarmanutencao"
                    element={
                        <>
                            <Navbar />
                            <ListarCarro />
                        </>
                    } />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;