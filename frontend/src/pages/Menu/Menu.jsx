import { makeStyles } from "@material-ui/core";
import Header from "../../components/Header/Header";
import MenuSection from "../../components/FoodMenu/MenuSection"

const Menu = () => {
  const { container, containerMenu } = useStyles();

  return (
    <div className={container}>
        <Header />
        <div className={containerMenu}>
          <MenuSection type="Promoções"/>
          <MenuSection type="Comidas"/>
          <MenuSection type="Bebidas"/>
        </div>
    </div>
  );
};

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexFlow: 'column',
    height: '100vh',
  },
  containerMenu: {
    flexGrow: 1,
    flexBasis: 'auto',
  }
});

export default Menu;