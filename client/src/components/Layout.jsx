import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      <Header />
      {children}
    </div>
  );
};
