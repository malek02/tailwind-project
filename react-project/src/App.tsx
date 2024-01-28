import React from "react";

function App() {

   React.useEffect (()=>{
    const eventSource = new EventSource("http://localhost:8082/stream");
    
    // attaching a handler to receive message events
    eventSource.onmessage = (event) => {
      const stockData = JSON.parse(event.data);
      console.log(stockData)
    };
   },[])

  return (
    <>
      <div className=" h-full text-red-500 justify-center flex flex-col items-center ">
        <h1>Hello tailwind</h1>
        <h3>im make in some new css here</h3>
      </div>
    </>
  );
}

export default App;
