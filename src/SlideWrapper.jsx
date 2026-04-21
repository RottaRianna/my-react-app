import { useLocation } from "react-router-dom";

export default function SlideWrapper({ children }) {
  const location = useLocation();

  return (
    <div key={location.pathname} className="slide-page">
      {children}
    </div>
  );
}
