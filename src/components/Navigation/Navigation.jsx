import {
  NavigationStyled,
  NavList,
  NavItem,
  LinkStyled,
} from "./Navigation.styled.js";

const Navigation = ({tabs}) => {
  return (
    <NavigationStyled>
          <NavList style={{display:"flex"}}>
          {tabs?.map(tab => (
            <NavItem key={tab.id} style={{marginRight:"25px"}}>
               <LinkStyled to={`/${tab.id}`}>{tab.title}</LinkStyled>
            </NavItem>
          ))}
        </NavList>
        </NavigationStyled>
  );
};

export default Navigation;
