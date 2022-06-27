import './index.scss'

// 1.class that we wanted to apply 
// 2.the array of the characters
// 3. will be the index and set the delay
const AnimatedLetters = ({letterClass, strArray, idx}) => {
    return (
    <span>
        {strArray.map((char,i)=>(
            <span key={char + i} className={`${letterClass} _${i + idx}`}>
                {char}
            </span>
        ))
        }
    </span>
    );
}

export default AnimatedLetters
