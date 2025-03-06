import Header from "../components/Header/Header";
import { Container } from "@mui/material";

const MainLayout = ({ children }) => {
    const user = {
        name: "محمد أحمد",
        avatar: null,
        subscriptionExpireDate: "2025-12-31",
      };
  return (
    <>
      <Header user={{user}}/>
      <Container>
        {children}
      </Container>
    </>
  );
};

export default MainLayout;
