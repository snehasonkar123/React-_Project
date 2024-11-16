{
    <div id ="parent">
        <div id = "child1">
            <h1>Hello World</h1>
            <h1>Hello World</h1>
        </div>
        <div id="child2">
            <h1>Hello World</h1>
            <h1>Hello World</h1>
        </div>
    </div>
}



    const heading = React.creatElement("h1", {id:heading},"hello world");
    const divElement = React.creatElement("div",{id: child1},[heading,heading,heading]);

    constparentDivElement = React.creatElement("div", {id: child2},[heading,heading,heading]);

    
  
    const root = ReactDom.creatElementById(document.getElementById("root"));
    root.render(heading);
