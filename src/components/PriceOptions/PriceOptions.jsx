import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

  const priceOptions = [
    {
      "id": 1,
      "name": "Basic Membership",
      "price": 29.99,
      "features": [
        "Access to gym equipment",
        "Unlimited cardio sessions",
        "Locker room access",
        "Basic fitness assessment"
      ]
    },
    {
      "id": 2,
      "name": "Silver Membership",
      "price": 49.99,
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
      "name": "Gold Membership",
      "price": 79.99,
      "features": [
        "Access to gym equipment",
        "Unlimited cardio sessions",
        "Locker room access",
        "Personal trainer assistance (4 sessions/month)",
        "Group fitness classes",
        "Access to sauna and spa"
      ]
    },
    {
      "id": 4,
      "name": "Platinum Membership",
      "price": 99.99,
      "features": [
        "Access to gym equipment",
        "Unlimited cardio sessions",
        "Locker room access",
        "Personal trainer assistance (6 sessions/month)",
        "Unlimited group fitness classes",
        "Access to sauna, spa, and swimming pool"
      ]
    }

  ]

  console.log(priceOptions);

  return (
    <div>
      <h2 className="text-5xl">Best Prices in the town</h2>



      {
        priceOptions.map(option =>
          <PriceOption key={option.id} option={option} />
        )
      }
    </div>
  );
};

export default PriceOptions;