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
    id: 1,
    name: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    },
  },
  stepThree: {
    addons: [
        {
    id: 1,
    name: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
  },
  {
    id: 2,
    name: "Larger storage",
    description: "Extra 1TB of cloud storage",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
  {
    id: 3,
    name: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
  },
    ],
  },
  
    type: "Monthly",
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
    case 4:
      return { ...state, type:action.data };
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

  //Funcion que se exporta junto al contexto, esta es la que se llama en los componentes
  const updateType = (type: 'Monthly'|'Yearly') => {
    const payload: PayloadType = {
      step: 4,
      data: type
    }
    dispatchForm(payload);
  };

  return(
    <FormContext.Provider value={{form, updateForm, updateType}}>
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