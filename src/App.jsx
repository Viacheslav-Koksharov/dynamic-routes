import { useState, useEffect} from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getTabs } from './services/api';
import Container from './components/Container';
import Navigation from './components/Navigation/Navigation';
import LazyTab from './components/LazyTab/LazyTab';
import NotFoundTab from './tabs/NotFoundTab';

const App = () => {
  const [tabs, setTabs] = useState();
  const [home, setHome] = useState();
  
  useEffect(() => {
    getTabs().then(data => {
      const sortData = data.sort((a, b) => a.order - b.order)
      setTabs(sortData)
    setHome(sortData[0]?.id)
    });
  }, []);

  return (
    <Container>
      <Navigation tabs={tabs} />
      <Routes>     
        {tabs?.map(tab => (
          <Route
            key={tab.id}
            path={`/${tab.id}`}
            element={<LazyTab tab={tab} />}
          />
        ))}
        {home && <Route index element={<Navigate to={`/${home}`} />} />}
        <Route path="*" element={<NotFoundTab />} />
      </Routes>
    </Container>
  );
};

export default App;
