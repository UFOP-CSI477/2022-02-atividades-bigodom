import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className="position-relative overflow-hidden p-3 m-md-3 text-center text-white">
            <div className='col-md-5 p-lg-5 mx-auto mb-4'>
                <h1 className='display-4 fw-normal'>Bem vindo a Mecânica Golden Hammer</h1>
                <p className='lead fw-normal'>Venha para a melhor mecânica da região. Aqui temos o melhor preço e o melhor serviço para te oferecer. Faça ja seu orçamento</p>

            </div>
            <div className='d-md-flex flex-md-equal w-100 my-md-3 ps-md-3'>
                <div className='text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden bloco mb-4 pb-4'>
                    <div className='my-3 py-3'>
                        <h2 className='display-5'>Crie uma conta</h2>
                        <p className='lead'>Crie uma conta para ter acesso a todos os nossos serviços.</p>
                        <Link to="/register"><button className='btn btn-success'>Registrar</button></Link>
                    </div>
                </div>
                <div className='bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden text-bg-light bloco mb-4 pb-4'>
                    <div className='my-3 py-3'>
                    <h2 className='display-5'>Cadastre seu cliente</h2>
                        <p className='lead'>Realize o cadastro do cliente.</p>
                        <Link to="/cadastrarcliente"><button className='btn btn-secondary'>Cadastrar Cliente</button></Link>
                    </div>
                </div>
            </div>
            <div className='d-md-flex flex-md-equal w-100 my-md-3 ps-md-3'>
                <div className='bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden text-bg-light bloco mb-4 pb-4'>
                    <div className='my-3 py-3'>
                    <h2 className='display-5'>Cadastre o veículo</h2>
                        <p className='lead'>Cadastre o veículo do seu cliente.</p>
                        <Link to="/cadastrarveiculo"><button className='btn btn-info'>Cadastrar Veículo</button></Link>
                    </div>
                </div>
                <div className='text-bg-dark me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden bloco mb-4 pb-4'>
                    <div className='my-3 py-3'>
                        <h2 className='display-5'>Cadastre a manutenção</h2>
                        <p className='lead'>Preencha a manutenção do veículo desejado.</p>
                        <Link to="/cadastrarmanutencao"><button className='btn btn-danger'>Cadastrar Manutenção</button></Link>
                    </div>
                </div>

            </div>
        </div>
        
    )
} 

export default Home