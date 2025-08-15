import type { AddonType, FormType } from "../../utils/FormTypes";
import "./StepFour.scss";

type SummaryProps = {
  form: FormType;
  handleStep: React.ActionDispatch<[type: "Next" | "Prev"]>;
};

type TotalArgs = {
  planMonthly: number;
  planYearly: number;
  addonList: AddonType[];
  type: "Monthly" | "Yearly";
};

const calculateTotal = ({
  planMonthly,
  planYearly,
  addonList,
  type,
}: TotalArgs) => {
  switch (type) {
    case "Monthly":
      return (
        planMonthly +
        addonList.reduce((acc, addon) => acc + addon.monthlyPrice, 0)
      );

    case "Yearly":
      return (
        planYearly +
        addonList.reduce((acc, addon) => acc + addon.yearlyPrice, 0)
      );
    default:
      return 0;
  }
};

function StepFour({ form, handleStep }: SummaryProps) {
  const addonList = form.stepThree.addons.filter(
    (addon) => addon.isAdded === true
  );
  const total = calculateTotal({
    planMonthly: form.stepTwo.plan.monthlyPrice,
    planYearly: form.stepTwo.plan.yearlyPrice,
    addonList,
    type: form.type,
  });

  return (
    <div className="step_four_container">
      <div className="step_four_container_header">
        <h1>Finishing up</h1>
        <p className="step_four_container_description">
          Double-check everything looks OK before confirming
        </p>
      </div>

      <div className="step_four_container_summary">
        <div className="summary">
          <div className="summary_details">
            <div className="summary_details_plan">
              <p>
                {form.stepTwo.plan.name} ({form.type})
              </p>
              <a>Change</a>
            </div>
            <p className="summary_details_price">
              {form.type === "Yearly"
                ? `$${form.stepTwo.plan.yearlyPrice}/yr`
                : `$${form.stepTwo.plan.monthlyPrice}/mo`}
            </p>
          </div>
          <hr className="divider" />
          <div className="summary_list">
            {addonList.length > 0 ? (
              addonList.map(
                (addon) =>
                  addon.isAdded && (
                    <div className="summary_list_addon" key={addon.id}>
                      <p className="summary_list_name">{addon.name}</p>
                      <p className="summary_list_price">
                        {form.type === "Yearly"
                          ? `$${addon.yearlyPrice}/yr`
                          : `$${addon.monthlyPrice}/mo`}
                      </p>
                    </div>
                  )
              )
            ) : (
              <p className="summary_list_name">No addons</p>
            )}
          </div>
        </div>

        <div className="total">
          <p className="total_label">
            Total
            {form.type === "Yearly" ? ` (per year)` : ` (per month)`}
          </p>
          <p className="total_price">
            {form.type === "Yearly" ? `$${total}/yr` : `$${total}/mo`}
          </p>
        </div>
      </div>

      <div className="steps">
        <button className={`steps_prev `} onClick={() => handleStep("Prev")}>
          Go back
        </button>
      </div>
    </div>
  );
}

export default StepFour;
