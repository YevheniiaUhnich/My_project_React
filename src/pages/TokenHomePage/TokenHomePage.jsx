import { useEffect } from "react";

export default function TokenHomePage() {
  useEffect(() => {
    document.title = "Task Manager";
  }, []);
  return (
    <>
      <div>
        <h1>Task manager welcome page{""}</h1>
      </div>
    </>
  );
}
