import { useEffect, useState } from "react";
import { Container, Grid2 } from "@mui/material";
import CardView from "../CardView/CardView";

const HomePage = () => {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const jsonData = await response.json();
    setProductList(jsonData);
  };
  return (
    <Container>
      <Grid2 container spacing={1} sx={{display: 'flex', flexWrap: 'wrap'}}>
        {productList.map((prod) => (
          <Grid2 size xs={12} sm={6} md={4} key={prod.id}>
            <CardView prodDetails={prod} showAddBtn= {true}/>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default HomePage;
