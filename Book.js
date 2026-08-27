function Book(props){
   const image=React.createElement("img",
    {src: "proprs.image ",width:"100px", height:"100px"},null);
   const title=React.createElement("h2",
       {colour:"red"},"Title:"+props.title)
   const price=React.createElement("h2",
       {style:{colour:"green"}},"Price:"+props.price+"/-")
   const btn=React.createElement("button",
       {style:{colour:"blue"}},"Add to Cart")
   const div=React.createElement("div",
       {className:"book"},[image,title,price,btn])
       return div;
}
export default Book;