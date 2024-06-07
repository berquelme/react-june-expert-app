import { useState } from 'react';
import { AddCategory, GifGrid} from './components';


// const shout = (name, age) => {
//   console.log("Hello " + name + "!!!!! Happy " + age +"th birthday!!!!")
  
// }
// shout("Ber", 25)

// const shout2 = (props) => {
//   console.log("Hello " + props.name + "!!!!! Happy " + props.age +"th birthday!!!!")
  
// }
// shout2({name: "Ber", age: 25})


const Person = (props) => {
  return <h1>{props.name}</h1>
}

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (newCategory) => {
    /* NewCategory is the event  */
    console.log( newCategory)


    if (categories.includes(newCategory)) return;

    setCategories([newCategory,...categories])
  }


  const myName = "Mi Perro"

  return (
    <>
      <Person name={myName} />
      {/*titulo*/}
      <h1>GifExpertApp</h1>

      {/*input*/}
      {/* AddCategory({onNewCategory: onAddCategory}) */}
      <AddCategory
        onNewCategory={onAddCategory}
        /*onNewCategory = { event => onAddcategory(event)} ----> same but different syntaxis, when the event is inmediately passed into a function */
      // setCategories={ setCategories }
      />
      {categories.map((category) => (

        <GifGrid key={category} category={category} />
      ))
      }


    </>
  )
}
