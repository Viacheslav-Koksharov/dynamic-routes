import { Routes, Route, Navigate } from 'react-router-dom';
import tabsData from './tabs/tabs.json';
import Container from './components/Container';
import Navigation from './components/Navigation/Navigation';
import LazyTab from './components/LazyTab/LazyTab';
import NotFoundTab from './tabs/NotFoundTab';

const App = () => {
  const tabs = tabsData;
  const sortedData = tabs.sort((a, b) => a.order - b.order);
  const home = sortedData[0]?.id;

  return (
    <Container>
      <Navigation sortedData={sortedData} />
      <Routes>
        {sortedData?.map(tab => (
          <Route
            key={tab.id}
            path={`/${tab.id}`}
            element={<LazyTab tab={tab} />}
          />
        ))}
        {<Route index element={<Navigate to={`/${home}`} />} />}
        <Route path="*" element={<NotFoundTab />} />
      </Routes>
    </Container>
  );
};

export default App;
