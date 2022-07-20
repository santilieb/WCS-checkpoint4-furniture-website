//create React functional component for homepage of furniture website
const Homepage = () => {
    return (
        <div className="homepage">
            <div className="homepage__hero">
                <div className="homepage__hero__text">
                    <h1>Furniture</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, quisquam.
                    </p>
                </div>
            </div>
            <div className="homepage__info">
                <div className="homepage__info__text">
                    <h2>About Furniture</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, quisquam.
                    </p>
                </div>
                <div className="homepage__info__text">
                    <h2>Our Mission</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate, quisquam.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Homepage;