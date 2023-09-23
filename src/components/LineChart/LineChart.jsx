import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {


  const membershipData = [
    { "id": 1, "month": "Jan", "members": 150, "avgTemperature": 40, "specialPromotion": "New Year Discount" },
    { "id": 2, "month": "Feb", "members": 160, "avgTemperature": 45, "specialPromotion": "Valentine's Day Sale" },
    { "id": 3, "month": "Mar", "members": 165, "avgTemperature": 50, "specialPromotion": "Spring Renewal Offer" },
    { "id": 4, "month": "Apr", "members": 180, "avgTemperature": 60, "specialPromotion": "April Fitness Challenge" },
    { "id": 5, "month": "May", "members": 200, "avgTemperature": 70, "specialPromotion": "Summer Kickoff Discount" },
    { "id": 6, "month": "Jun", "members": 220, "avgTemperature": 80, "specialPromotion": "Summer Body Special" },
    { "id": 7, "month": "Jul", "members": 240, "avgTemperature": 85, "specialPromotion": "Independence Day Promo" },
    { "id": 8, "month": "Aug", "members": 255, "avgTemperature": 83, "specialPromotion": "Back to School Offer" },
    { "id": 9, "month": "Sep", "members": 270, "avgTemperature": 75, "specialPromotion": "Fall Fitness Challenge" },
    { "id": 10, "month": "Oct", "members": 285, "avgTemperature": 65, "specialPromotion": "Halloween Special" },
    { "id": 11, "month": "Nov", "members": 300, "avgTemperature": 55, "specialPromotion": "Pre-Thanksgiving Sale" },
    { "id": 12, "month": "Dec", "members": 320, "avgTemperature": 45, "specialPromotion": "Holiday Fitness Deal" }
  ]



  return (
    <div className='mt-12'>
      <LChart width={1480} height={300} data={membershipData}>

        <XAxis dataKey="month" />
        <YAxis />
        <Line type="monotone" dataKey="members" stroke="#8884d8" />
        <Line type="monotone" dataKey="avgTemperature" stroke="#82ca9d" />
      </LChart>

    </div>
  );
};

export default LineChart;