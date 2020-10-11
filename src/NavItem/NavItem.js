import React from 'react';

const NavItem = (props) => {
	return (
		<li className="menu-item">
			<a href={`${props.path}`}>
				<span className={props.url === props.path.substr(1) ? 'menu-item active' : 'menu-item'}>
					{props.icon}
				</span>
			</a>
		</li>
	);
};

export default NavItem;
