import DataTable from "components/DataTable";
import NavBar from "components/NavBar";
import Footer from "components/Footer";
import BarChart from "components/BarChart";
import DonutsChart from "components/DonutsChart";


function App() {
  return (
    <>
    <NavBar />
    <div className="container">
      <h1 className="text-primary py-3">Dashboard de Vendas</h1>

      <div className="row px-3">
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Taxas de sucesso</h5>
          <BarChart/>
        </div>
        <div className="col-sm-6">
          <h5 className="text-center text-secondary"> Todas vendas</h5>
          <DonutsChart/>
        </div>
      </div>
      
      <div className="py-3">
          <h2 className="text-primary">Todas vendas</h2>
      </div>
      <DataTable />
    </div>
    <Footer />
    </>
  );
}

export default App;
