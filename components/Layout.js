import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./BackToTopButton";
import { useRouter } from "next/router";
import ScrollProgressBar from "./ScrollProgressBar";
import PopupBanner from "./PopupBanner";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const router = useRouter();

  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    // Show the popup when the component is mounted
    setShowPopup(true);
  }, [router]);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="transition-colors dark:bg-darkmode_gray-0 dark:transition-colors">
      <Navbar />
      {showPopup && <PopupBanner onClose={handleClosePopup} />} {children}
      <div className="hidden lg:block">
        <ScrollToTop />
      </div>
      <ScrollProgressBar />
      <Footer />
    </div>
  );
};
export default Layout;
