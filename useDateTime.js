import { useState, useEffect } from 'react';

function useDateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // updates every second

    return () => clearInterval(interval); // cleanup
  }, []);

  return dateTime.toLocaleString();
}

export default useDateTime;
