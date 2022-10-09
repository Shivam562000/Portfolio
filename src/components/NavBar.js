import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/img/coder.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import gmail from '../assets/img/gmail.png'
//import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState('home');
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 200) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', onScroll);

		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	
	window.onscroll = function() {myFunction()};
	function myFunction() {
		var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
		var scrolled = (winScroll / height) * 100;
		document.getElementById("scrollIndicator").style.width = scrolled + "%";
	}

	return (
		<Router>
			
			<Navbar expand="md" className={scrolled ? 'scrolled' : ''}>
				<Container>
					<Navbar.Brand href="/portfolio">
						<img src={logo} alt="Logo" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav">
						<span className="navbar-toggler-icon"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ms-auto">
							<Nav.Link
								href="#home"
								className={
									activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('home')}
							>
								Home
							</Nav.Link>
							<Nav.Link
								href="#education"
								className={
									activeLink === 'education' ? 'active navbar-link' : 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('education')}
							>
								Education
							</Nav.Link>

							<Nav.Link
								href="#skills"
								className={
									activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('skills')}
							>
								Skills
							</Nav.Link>
							<Nav.Link
								href="#competitiveProgramming"
								className={
									activeLink === 'competitiveProgramming'
										? 'active navbar-link'
										: 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('competitiveProgramming')}
							>
								Coding Profile
							</Nav.Link>
							<Nav.Link
								href="#projects"
								className={
									activeLink === 'projects'
										? 'active navbar-link'
										: 'navbar-link'
								}
								onClick={() => onUpdateActiveLink('projects')}
							>
								Projects
							</Nav.Link>
						</Nav>
						<span className="navbar-text">
							<div className="social-icon">
								<a
									href="https://www.linkedin.com/in/shivam-umesh-chougule-364027183/"
									target="_blank"
									rel="noreferrer"
								>
									<img src={navIcon1} alt="linkedIn" />
								</a>
							</div>
							<div className="social-icon">
								<a
									href="shivamchougule24@gmail.com"
									target="_blank"
									rel="noreferrer"
								>
									<img src={gmail} alt="gmail" />
								</a>
							</div>
							<a href="https://drive.google.com/drive/u/0/folders/1jc4hV6v-XbOrE-my8cRkJEXWnZq58SSZ" target="_blank"
									rel="noreferrer">
								<button type="button" className="btn btn-success">Resume</button>
								
							</a>
						</span>
					</Navbar.Collapse>
				</Container>
				
				<div className="line" id="scrollIndicator"></div>

			</Navbar>					
		</Router>	
	);
};
