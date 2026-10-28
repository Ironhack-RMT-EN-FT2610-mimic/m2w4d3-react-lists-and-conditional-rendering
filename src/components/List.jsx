// rfce or rfc

function List() {

  let someString = "hello"
  let someNumber = 10
  let someBoolean = true
  let someObject = {
    property1: "some value",
    property2: "some other value"
  }
  let someArray = ["potato", "tomato", "lettuce"]

  // let someJSXElements = []
  // someArray.forEach((veggie) => {
  //   someJSXElements.push( (<p>{veggie}</p>) )
  // })
  
  // let someJSXElements = someArray.map((veggie) => {
  //   return (<p>{veggie}</p>)
  // })

  // let someJSXElements = [ (<p>potato</p>), (<p>tomato</p>), (<p>lettuce</p>) ]

  return (
    <div>
      
      <h1>Lists</h1>

      {someArray.map((veggie, index) => {
        return (<h3 key={index}><span>{veggie}</span></h3>)
      })}

    </div>
  )
}
export default List

