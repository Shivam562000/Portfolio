import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/img/coder.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
	return (
		<footer className="footer">
			<Container>
				<Row className="align-items-center">
					<Col size={5} sm={5}>
						<img src={logo} alt="Logo" />
					</Col>
					<Col size={12} sm={7} className="text-center text-sm-end">
						<div className="social-icon">
							<a
								href="https://www.linkedin.com/in/shivam-umesh-chougule-364027183/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={navIcon1} alt="Icon" />
							</a>
						
							<a
								href="https://www.instagram.com/shivamuchougule/"
								target="_blank"
								rel="noreferrer"
							>
								<img src={navIcon3} alt="Icon" />
							</a>
						</div>
						<p>Copyright 2022. All Rights Reserved</p>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};
