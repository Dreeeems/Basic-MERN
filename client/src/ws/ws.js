import { useState, useEffect, useRef } from "react";

const useWebSocket = (url) => {
  const [message, setMessage] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(url);

    ws.current.onopen = () => {
      console.log("WebSocket connection opened");
      setIsConnected(true);
    };

    ws.current.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      setMessage(parsedData);
      console.log(message);
    };

    ws.current.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    ws.current.onclose = () => {
      console.log("WebSocket connection closed");
      setIsConnected(false);
    };

    return () => {
      if (ws.current) {
        ws.current.close();
      }
    };
  }, [url]);

  return { message, isConnected };
};

export default useWebSocket;
