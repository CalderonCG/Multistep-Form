import { createContext, useContext, useReducer, type ReactNode } from "react";
import type {
    FormContextType,
  FormType,
  PayloadType
} from "./FormTypes";

//Creacion del context, con valor inicial undefined
export const FormContext = createContext<FormContextType | undefined>(undefined)

//Provider---------------------------------------------------
//Valor inicial del context
const initialForm: FormType = {
  stepOne: {
    name: "",
    email: "",
    phoneNumber: "",
  },
  stepTwo: {
    plan: {
      name: "",
      price: 0,
    },
    type: "Monthly",
  },
  stepThree: {
    addons: [],
  },
};

//Funcion que actualiza el form respecto al paso que se indico
const formReducer = (state: FormType,action:PayloadType) => {
  switch (action.step) {
    case 1:
      return { ...state, stepOne:action.data };

    case 2:
      return { ...state, stepTwo:action.data };

    case 3:
      return { ...state, stepThree:action.data };
    default:
      return state;
  }
};

//Provider
export const FormProvider = ({ children }: { children: ReactNode }) => {
  //UseReducer para manejar el estado del form
    const [form, dispatchForm] = useReducer(formReducer, initialForm);

    //Funcion que se exporta junto al contexto, esta es la que se llama en los componentes
  const updateForm = (payload: PayloadType) => {
    dispatchForm(payload);
  };

  return(
    <FormContext.Provider value={{form, updateForm}}>
        {children}
    </FormContext.Provider>
  )
};


//Custom hook para lidiar asegurar que se usa dentro de provider
export const useForm = () =>{
    const context = useContext(FormContext)

    if(context === undefined){
        throw new Error('useForm must be used inside a FormProvider')
    }
    return context
}