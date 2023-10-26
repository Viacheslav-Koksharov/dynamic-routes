export const getTabs = async () => {
  const response = await fetch('http://localhost:4040/tabs');
  const tabs = response.json();
  return tabs;
};
