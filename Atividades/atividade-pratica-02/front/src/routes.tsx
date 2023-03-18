import { Routes, Route, BrowserRouter } from 'react-router-dom';
import CreateEstado from './components/estados/CreateEstado';
import ListEstados from './components/estados/ListEstados';
import UpdateEstado from './components/estados/UpdateEstado';
import CadastroPessoaForm from './components/pessoas/CadastroPessoa';
import Navbar from './components/navbar/Navbar';
import ListarPessoas from './components/pessoas/ListarPessoas';
import ListarCidades from './components/cidades/ListarCidades';


const AppRoutes = () => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/"
                    element={
                        <>
                            <Navbar />
                            
                        </>
                    } />

                <Route path="/estados"
                    element={
                        <>
                            <Navbar />
                            <ListEstados />
                        </>
                    } />

                <Route path="/estados/create"
                    element={
                        <>
                            <Navbar />
                            <CreateEstado />
                        </>
                    } />

                <Route path="/estados/update/:id"
                    element={
                        <>
                            <Navbar />
                            <UpdateEstado />
                        </>
                    } />

                <Route path="/cadastroPessoa"
                    element={
                        <>
                            <Navbar />
                            <CadastroPessoaForm />
                        </>
                    } />
                <Route path="/listarPessoas"
                    element={
                        <>
                            <Navbar />
                            <ListarPessoas />
                        </>
                    } />
                    <Route path="/listarCidades"
                    element={
                        <>
                            <Navbar />
                            <ListarCidades />
                        </>
                    } />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;