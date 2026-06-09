import User from "./User";
import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About Us Page</h1>
            <h2>This is the About Us page.</h2>
            <User name="Ayush Singh" location="Gorakhpur" contact="9580786562" />
            <UserClass name="Ritesh Gurkhe" location="Mumbai" contact="9876543210" />
        </div>
    );
}

export default About;