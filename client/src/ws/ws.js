import { useState, useEffect, useRef } from "react";
import { fetchFromApi } from "../util/fetchFromApi";

const useWebSocket = (url) => {
  const [message, setMessage] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new WebSocket(url);
    ws.current.onopen = async () => {
      const data = await fetchFromApi();
      setMessage(data);
      console.log("WebSocket connection opened");

      setIsConnected(true);
    };

    ws.current.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      setMessage(parsedData);
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
