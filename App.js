const parent = React.createElement("div",{id:"parent"},
    [React.createElement("h1",{id:"child1"},"Hello ,h1 tag hai bhai"),
       React.createElement("h2",{id:"child2"},"Hello ,h2 tag hai bhai")]);
console.log(parent);
//JSX
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


// const heading = React.createElement("h1",{id:"heading" , xyz:"abc"},"Hello World By React!!");
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

