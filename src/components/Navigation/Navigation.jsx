import {
  NavigationStyled,
  NavList,
  NavItem,
  LinkStyled,
} from "./Navigation.styled.js";

const Navigation = ({sortedData}) => {
  return (
    <NavigationStyled>
          <NavList style={{display:"flex"}}>
          {sortedData?.map(({id,title}) => (
            <NavItem key={id} style={{marginRight:"25px"}}>
               <LinkStyled to={`/${id}`}>{title}</LinkStyled>
            </NavItem>
          ))}
        </NavList>
        </NavigationStyled>
  );
};

export default Navigation;
