import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import { TransactionsProvider } from "./context/TransactionContext";

function App() {
  return (
    <TransactionsProvider>
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
          <Navbar />

          <Welcome />
        </div>
        <Services />
        <Transactions />
        <Footer />
      </div>
    </TransactionsProvider>
  );
}

export default App;
