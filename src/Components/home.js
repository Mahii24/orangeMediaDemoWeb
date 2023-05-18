import { Image } from "react-bootstrap";
import Construct from "../image/apartment1.jpeg";
import { FaSearch } from 'react-icons/fa';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { BsPersonWorkspace } from 'react-icons/bs';
import { BsHouse } from 'react-icons/bs';
import { BsBuildingsFill } from 'react-icons/bs';
import { BsThreeDots } from 'react-icons/bs';
import "../CSS/home.css";
const Home = () => {
    return (
        <div>
            <div className="home_Nav textfontfamily">
                <ul>
                    <li>
                        <a>
                            <div className="icon">< BsFillHouseDoorFill /></div>
                            <div>Buy Properties</div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div className="icon"><BsPersonWorkspace /></div>
                            <div>Let's Construct</div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div className="icon"><BsHouse /></div>
                            <div>Rent Properties</div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div className="icon"><BsBuildingsFill /></div>
                            <div>Commercial Properties</div>
                        </a>
                    </li>
                    <li>
                        <a>
                            <div className="icon"><BsThreeDots /></div>
                            <div>More Services</div>
                        </a>
                    </li>
                </ul>
            </div>

            <div >
                <h2 id="constrealtext" className="textfontfamily text-bold">Construction Made Real Easy</h2>
                <nav className="navbar navbar-light groupInput">
                    <form className="container">
                        <div className="input-group ">
                            <input type="text" className="form-control" placeholder="Name" aria-label="Username" aria-describedby="basic-addon1" />
                            <input type="text" className="form-control" placeholder="Email Id" aria-label="Username" aria-describedby="basic-addon1" />
                            <input type="text" className="form-control" placeholder="Phone Number" aria-label="Username" aria-describedby="basic-addon1" />
                            <button type="submit" className="btn btn-danger ms-2"><FaSearch /> Submit</button>
                        </div>
                    </form>
                </nav>
            </div>
            <Image className="ConstImg h-100 w-100" src={Construct}></Image>

        </div>
    )
}
export default Home;