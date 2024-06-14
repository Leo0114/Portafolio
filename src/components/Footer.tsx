import React, { useEffect, useState } from "react";

const Footer: React.FC = () => {
  const [year, setYear] = useState<string>("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="text-center mt-auto py-4 sticky top-full">
      <small>Copyright &copy; {year} | All rights reserved</small>
    </footer>
  );
};

export default Footer;
