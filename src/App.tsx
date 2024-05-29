import {} from "react";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {/* Botones básicos */}
      <Button label="Click Me" disabled color="primary" size="medium" onClick={() => alert('Button clicked!')} />
    </div>
  );
}

export default App;
