import { useState } from "react";
import { RevenueCard } from "./components/RevenueCard";

export default function App() {
  const [choice, setChoice] = useState(null);
  return (
    <div>
      <div className="cards flex absolute w-[85%] h-[21%] justify-between">
        <RevenueCard
          title="Next Payout"
          price="₹2,312.23"
          orders="23"
          dateTime="Today, 4:00PM"
          selected={choice == "first"}
          onPush={() => {
            setChoice("first");
          }}
        />
        <RevenueCard
          title="Amount Pending"
          price="₹92,312.20"
          orders="13"
          dateTime="Today, 4:00PM"
          selected={choice == "second"}
          onPush={() => {
            setChoice("second");
          }}
        />
        <RevenueCard
          title="Amount Processed"
          price="₹23,92,312.19"
          orders="3"
          dateTime="Today, 4:00PM"
          selected={choice == "third"}
          onPush={() => {
            setChoice("third");
          }}
        />
      </div>
    </div>
  );
}
