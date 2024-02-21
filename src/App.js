import Layout from "./components/ui/layout";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import UserGridListPage from "./pages/UserGridList";
import UserDetail from "./pages/UserDetail";
import { Context } from "./utils/AppBarContext";
import { TITLE } from "./utils/constants";

function App() {
  const [appTitle, setAppTitle] = useState(TITLE);
  return (
    <Context.Provider value={[appTitle, setAppTitle]}>
      <Layout />
      <div style={{ padding: "6%",marginTop: 20 }}>
        <Routes>
          <Route exact path="/" element={<UserGridListPage />} />
          <Route exact path="/users/:pageNo?" element={<UserGridListPage />} />
          <Route path="/user/:userName/:pageNo?" element={<UserDetail />} />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
