import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";
// import firstPagee from "./pages/firstPage/firstPage";
// import { MyTable } from "./pages/firstPage/components/table";
// import { data } from "./pages/firstPage/components/tabledata";
import { MyTable } from "./components/table";
import { data } from "./components/tabledata";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <firstPagee /> */}
    <MyTable data={data} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
