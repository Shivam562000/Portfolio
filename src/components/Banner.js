import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState('');
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const toRotate = [ "Problem Solver", "Full-Stack Developer", "Web Developer"];
	const period = 1000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 2)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === '') {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	return (
		<section className="banner" id="home">
			<Container>
				<Row className="align-items-center">
					<Col xs={12} md={6} xl={7}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? 'animate__animated animate__fadeIn' : ''
									}
								>
									<span className="tagline">Welcome to my Portfolio</span>
									<h1>
										{`Hi! I'm Shivam `}
										<br></br>{' '}
										<span
											className="txt-rotate"
											dataperiod="1000"
											data-rotate='[ "Problem Solver", "Full-Stack Developer", "Web Developer" ]'
										>
											<span className="wrap">{text}</span>
										</span>
									</h1>
									<h2>Software Engineer at LTI</h2>
									<p>
										<b>
											I am a Computer Science enthusiast. Passionate for competitive programming.
											Full stack MERN developer who is good at Data Structures and
											Algorithms. Proficient in JavaScript, Node.js, MySQL,
											MongoDB, and Java. Capable of building scalable and
											responsive web applications with optimized performance.
										</b>
									</p>
									<br></br>
									<h3>
										Looking for Software Development Engineer? <br></br>Well look
										no more
									</h3>
									<a
										href="https://www.linkedin.com/in/shivam-umesh-chougule-364027183/"
										target="_blank"
										rel="noreferrer"
									>
										<button>
											Let’s Connect <ArrowRightCircle size={25} />
										</button>
									</a>
								</div>
							)}
						</TrackVisibility>
					</Col>
					<Col xs={12} md={6} xl={5}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? 'animate__animated animate__zoomIn' : ''
									}
								>
									<img src={headerImg} alt="Header Img" />
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
		</section>
	);
};
