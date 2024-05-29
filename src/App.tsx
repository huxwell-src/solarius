import {} from "react";
import { Button } from "./components/Button";
import { Badge } from "./components/Badge";

function App() {
  return (
    <div className="h-screen w-screen flex items-center justify-center flex-col gap-2">
      {/* Botones básicos */}
      <Button
        label="Button"
        pill
        soft
        size="medium"
        onClick={() => console.log("Hola mundo")}
      />
      <div className=" flex gap-2">
        <Badge label="Badge"  color="warning" close />
        <Badge label="Badge"  color="success" close />
        <Badge label="Badge"  color="danger" close />
        <Badge label="Badge" close />
      </div>
    </div>
  );
}
export default App;
