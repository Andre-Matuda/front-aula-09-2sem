import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <div>
       <header>
        <h1>Minha Aplicação</h1>
        <nav>
          <a href="/">Home</a> | 
          <a href="/produtos"> Produtos</a>
        </nav>
       </header>
       <div className="container">
         <Outlet/> {/* Renderiza o componente da rota filha aqui */}
       </div>
        <footer>
          <p>&copy; 2024 Minha Aplicação</p>
        </footer>
    </div>
  );
}
