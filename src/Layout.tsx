import { Outlet, useSearchParams } from "react-router";
import Header from "./components/header";
import Modal from "./components/ui/modal";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";

const Layout = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const modal = searchParams.get("modal");

  const closeModal = () => {
    setSearchParams({});
  };
  return (
    <>
      <Modal isOpen={modal === "signin"} onClose={closeModal}>
        <SignIn />
      </Modal>

      <Modal isOpen={modal === "signup"} onClose={closeModal}>
        <SignUp />
      </Modal>

      <Header />
      <div className="h-[calc(100vh-64px)]">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
