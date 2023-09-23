import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

  const priceOptions = [
    {
      "id": 1,
      "name": "Basic Membership",
      "price": 39.99,
      "features": [
        "Access to gym equipment",
        "Unlimited cardio sessions",
        "Locker room access",
        "Basic fitness assessment"
      ]
    },
    {
      "id": 2,
      "name": "Premium Membership",
      "price": 69.99,
      "features": [
        "Access to gym equipment",
        "Unlimited cardio sessions",
        "Locker room access",
        "Personal trainer assistance (2 sessions/month)",
        "Group fitness classes"
      ]
    },
    {
      "id": 3,
      "name": "Platinum Membership",
      "price": 99.99,
      "features": [
        "Access to gym equipment",
        "Unlimited cardio sessions",
        "Locker room access",
        "Personal trainer assistance (4 sessions/month)",
        "Unlimited group fitness classes",
        "Access to sauna, spa, and swimming pool"
      ]
    }

  ]

  console.log(priceOptions);

  return (
    <div className="mx-12 mb-8">
      <h2 className="text-5xl py-4">Best Prices in the town</h2>

      <div className="grid grid-cols-3 gap-6">
        {
          priceOptions.map(option =>
            <PriceOption key={option.id} option={option} />
          )
        }
      </div>
    </div>
  );
};

export default PriceOptions;