import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Nav = () => {
	const totalItem = useSelector((state) => state.cart.totalItems);
	// const totalItem = 1;
	React.useEffect(() => {}, [totalItem]);
	return (
		<div className="nav">
			<nav className="nav-bar">
				<Link to="/cards">
					<div className="nav-link">Cards</div>
				</Link>
				<Link to="/profile">
					<div className="nav-link">Profile</div>
				</Link>
				<Link to="/cart">
					<div className="nav-link">Cart {totalItem > 0 ? `( ${totalItem} )` : ''}</div>
				</Link>
			</nav>
		</div>
	);
};

export default Nav;
