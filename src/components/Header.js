import  React from 'react';

const Header = (props) => {
    return(
        <div className="container">
            <header>
                <h1 className=" text-center text-white display-4 mt-5 mb-5">
                    {props.title}
                </h1>
            </header>
        </div>

    )
}

export default Header;