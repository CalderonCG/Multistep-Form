export type FormContextType= {
    form : FormType,
    updateForm: (arg: PayloadType) => void,
    
    updateType: (arg: "Monthly" | "Yearly") => void
}

export type FormType = {
  stepOne: StepOneType;
  stepTwo: StepTwoType;
  stepThree: StepThreeType;
  type: "Monthly" | "Yearly";
};

export type StepOneType = {
  name: string;
  email: string;
  phoneNumber: string;
};

export type StepTwoType = {
  plan: PlanType;
};

export type StepThreeType = {
  addons: AddonType[];
};



export type PlanType = {
  id: number,
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
};

export type AddonType = {
  id: number;
  name: string;
  description: string
  monthlyPrice: number;
  yearlyPrice: number;
  isAdded: boolean;
};

export type PayloadType = 
  | { step: 1; data: StepOneType }
  | { step: 2; data: StepTwoType }
  | { step: 3; data: StepThreeType }
  | {step: 4; data: 'Monthly'| 'Yearly'};

type StepPropsType={
  handleStep : React.ActionDispatch<[type: "Next" | "Prev"]>,
  handleFormUpdate: (arg: PayloadType) => void
}

export type StepOnePropsType= StepPropsType &{
  data: StepOneType
} 
export type StepTwoPropsType= StepPropsType &{
  data: StepTwoType,
  planType: "Monthly" | "Yearly",
  handleTypeUpdate : (arg: "Monthly" | "Yearly") => void
}
export type StepThreePropsType= StepPropsType &{
  data: StepThreeType
  planType: "Monthly" | "Yearly",
}
