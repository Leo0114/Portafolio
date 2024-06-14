import { useEffect } from "react";
import Typed from "typed.js";

const TypedText: React.FC = () => {
  useEffect(() => {
    const options = {
      stringsElement: "#typed-strings",
      typeSpeed: 50,
      loop: true,
    };

    const typed = new Typed("#typed", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div id="typed-strings">
        <p>
          As a <strong>Software</strong> <span>Engineer</span>
        </p>
        <p>
          I<em> work</em> with React, Astro and JavaScript.
        </p>
      </div>
      <div className="text-center mt-6">
        <span id="typed"></span>
      </div>
    </>
  );
};

export default TypedText;
