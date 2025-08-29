const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-4">Teste de Formulário</h1>
      <form className="bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label className="block mb-2">Nome:</label>
          <input 
            type="text" 
            className="w-full p-2 border rounded"
            placeholder="Seu nome"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Email:</label>
          <input 
            type="email" 
            className="w-full p-2 border rounded"
            placeholder="seu@email.com"
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default App;
