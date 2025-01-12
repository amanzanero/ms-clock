import PWABadge from "@/PWABadge";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: Date) => {
    const timeString = time.toLocaleTimeString("en-US", {
      hour12: true,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    const ms = time.getMilliseconds().toString().padStart(3, "0");

    // Split into time and meridiem (AM/PM)
    const [timePart, meridiem] = timeString.split(" ");
    return `${timePart}.${ms} ${meridiem}`;
  };

  const getTimezone = () => {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-dvh h-full w-full bg-gray-100 px-2">
        <div className="p-8 bg-white rounded-lg">
          <h1 className="text-xl font-bold mb-4 text-center text-gray-800">Millisecond Clock</h1>
          <div className="text-4xl font-mono text-center text-gray-700">{formatTime(time)}</div>
          <div className="mt-4 text-xl text-center text-gray-600">Timezone: {getTimezone()}</div>
        </div>
      </div>
      <PWABadge />
    </>
  );
}

export default App;
