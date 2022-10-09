import { Container, Row, Col } from 'react-bootstrap';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

//import hotelBooking from '../assets/img/hotelBooking.png';
import phishingattack from '../assets/img/phishingattack.jpeg';
import vehicle from '../assets/img/vehicle.jpeg';
import faceMaskDetection from '../assets/img/faceMaskDetection.png'

export const Projects = () => {
	const projects = [
		{
			title: 'FACE MASK DETECTOR',
			description: `Developed a hybrid model using deep learning and classical machine learning for face mask detection. 
						It identifies whether the person on image/video stream is wearing face mask or not with the help of computer vision and deep learning.
						Alert the authority with mail for person without mask.`,
			techStack: `Deep Learning, OpenCV, React.js, Bootstrap, HTML5, DJANGO, TKINTER, CSS3, JSX`,
			sourceCode: `https://github.com/Shivam562000/`,
			imgUrl: faceMaskDetection,
		},
		{
			title: 'PRICE PREDICTION of USED VEHICLES',
			description: `Developed a model which can accurately predict price of used vehicle. 
							Features like manufacturer, condition, fuel type, transmission, purchased year, odometer, etc are used to test the model. 
							Deployed on Cloud platform (Heroku).`,
			techStack: `Machine Learning, React.js, HTML5, CSS, Django,`,
			sourceCode: `https://github.com/Shivam562000/`,
			imgUrl: vehicle,
		},
		{
			title: 'Phishing Detection Extension',
			description: `Build a extension which detect phishing websites.
							Provides warning to end user.
							Provides web security.`,
			techStack: `Maachine Learning, XGBoost, Javascript, Nodejs`,
			sourceCode: 'https://github.com/Shivam562000/',
			imgUrl: phishingattack,
		},
	];

	return (
		<section className="project" id="projects">
			<div className="project-bx wow zoomIn">
			<Container>
				<Row>
					<Col size={12}>
						<TrackVisibility>
							{({ isVisible }) => (
								<div
									className={
										isVisible ? 'animate__animated animate__fadeIn' : ''
									}
								>
									<h2>PROJECTS</h2>
									<Row>
										{projects.map((project, index) => {
											return <ProjectCard key={index} {...project} />;
										})}
									</Row>
									<p>
										<a
											href="https://github.com/Shivam562000"
											target="_blank"
											rel="noreferrer"
										>
											<p>
												Love to see more of my work ?
												<span>
													{'  '}
													<ArrowRightCircle size={25} />
												</span>
											</p>
										</a>
									</p>
								</div>
							)}
						</TrackVisibility>
					</Col>
				</Row>
			</Container>
			<img
				className="background-image-right"
				src={colorSharp2}
				alt="Background-img"
			></img>
		</div>
		</section>
	);
};
