import Layout from "./components/Layout";
import TaskManager from "./components/TaskManager";
import ApiData from "./components/ApiData";

function App() {
  return (
    <Layout>
      <TaskManager />
      <ApiData />
    </Layout>
  );
}

export default App;
