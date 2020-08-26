import { useEffect } from "react";

export default function Boundary() {
  useEffect(() => {
    throw new Error("In Boundary!");
  }, []);

  return <div>hello!</div>;
}
