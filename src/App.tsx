import {
  About,
  Calendar,
  Map,
  TimePlan,
  DressCode,
  Form,
  RemainingTime,
} from "./components";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <About />
      <Calendar />
      <Map />
      <TimePlan />
      <DressCode />
      <Form />
      <RemainingTime />
    </>
  );
}

export default App;
