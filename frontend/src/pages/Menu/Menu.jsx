import { makeStyles } from "@material-ui/core";
import Header from "../../components/Header/Header";
import Cart from "../../components/Cart/Cart";
import MenuSection from "../../components/FoodMenu/MenuSection"
import { useState } from "react";

const Menu = () => {
  const { container, containerMenu } = useStyles();

  const [showCart, setShowCart] = useState(false);
  
  const showCartHandler = () => {
    setShowCart(true);
  }

  const closeCartHandler = () => {
    setShowCart(false);
  }

  return (
    <div className={container}>
      {showCart && <Cart onCloseCart={closeCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <div className={containerMenu}>
        <MenuSection type="Promoções" />
        <MenuSection type="Comidas" />
        <MenuSection type="Bebidas" />
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