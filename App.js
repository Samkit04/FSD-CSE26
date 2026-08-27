import Book from "./Book.js"
const bookdata=[
    {image:"",title:"ReactJS",price:465},
     {image:"",title:"NodeJS",price:465},
      {image:"",title:"ExpreeJS",price:465}
]
function App(){
    const bookstore=bookdata.map((b)=>{
      return  Book(b)
    })
    const div=React.createElement("div",
        {className:"bookstore"},[...bookstore])
        return div;
}
export default App;