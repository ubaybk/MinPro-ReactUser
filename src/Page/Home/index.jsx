import { Link } from "react-router-dom"
const Home = () =>{
    return(
        <>
            <div>
                <Link to={'/login'}>
                <button>login yuk</button>
                </Link>
                
            </div>
        </>
    )
}

export default Home