    /*
    <div id="root">
        <div id="child">
            <h1>Namsate React</h1>
        </div>
    </div>
    
    
    */ 
    const heading = React.createElement("div", {id: "r1"}, [React.createElement("div", {id: "r2"},
    [ React.createElement("h1",{},"Namsate React") ,  React.createElement("h2",{},"Namsate JavaScript")]
     ) ,React.createElement("div", {id: "r2"},
     [ React.createElement("h1",{},"Namsate React") ,  React.createElement("h2",{},"Namsate JavaScript")]
      ) ] );
    // const heading = React.createElement("h1",
    //     {
    //         id:"heading",
    //         xyz: "abc"  
    //     },
    // "I Love React!");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading);
    console.log(heading);