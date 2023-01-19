import { useState } from "react"

const Home = () => {

    const [name, setName] = useState('mario')
    const [age, setAge] =  useState(19)


    const handleClick = (name) => {
        setName('Efraim')
        setAge(25)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is {age} years old</p>
            <button onClick={() => handleClick('Efraim')}>Click Me</button>
        </div>
     );
}
 
export default Home;