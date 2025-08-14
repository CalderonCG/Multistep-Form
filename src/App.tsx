import "./App.scss";
import Form from "./components/Form/Form";
import { FormProvider } from "./utils/FormContext";

function App() {
  return (
    <div className="app_container">
      <FormProvider>
        <Form />
      </FormProvider>
    </div>
  );
}

export default App;
