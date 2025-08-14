export type FormContextType= {
    form : FormType,
    updateForm: (arg: PayloadType) => void
}

export type FormType = {
  stepOne: StepOneType;
  stepTwo: StepTwoType;
  stepThree: StepThreeType;
};

export type StepOneType = {
  name: string;
  email: string;
  phoneNumber: string;
};

export type StepTwoType = {
  plan: PlanType;
  type: "Monthly" | "Yearly";
};

export type StepThreeType = {
  addons: AddonType[];
};

export type PlanType = {
  name: string;
  price: number;
};

export type AddonType = {
  name: string;
  price: number;
};

export type PayloadType = 
  | { step: 1; data: StepOneType }
  | { step: 2; data: StepTwoType }
  | { step: 3; data: StepThreeType };

