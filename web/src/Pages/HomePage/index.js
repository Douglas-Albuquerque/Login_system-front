
const HomePage = () => {

  const getToken = localStorage.getItem("token");

  console.log("token ok", getToken);

  return (
    <div>
      <h1>Voce está Logado</h1>
    </div>
  )
};

export default HomePage;