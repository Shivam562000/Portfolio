import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import colorSharp1 from '../assets/img/color-sharp.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

//Programming Languages
import C from '../assets/img/C.png'
import CPP from '../assets/img/C++.png'
import CSharp from '../assets/img/Csharp_Logo.png'
import Python from '../assets/img/Python.png'
import java from '../assets/img/java.png';

//Web Tech
import html5 from '../assets/img/html5.png';
import css3 from '../assets/img/css3.png';
import nodejs from '../assets/img/nodejs.png';
import expressjs from '../assets/img/expressjs.png';
import javascript from '../assets/img/javascript.png';
import react from '../assets/img/react.png';
import mongodb from '../assets/img/mongodb.png';

//Others
import Github from '../assets/img/github.png';
import git from '../assets/img/git.png';
import sql from '../assets/img/sql.jpg'



export const Skills = () => {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section className="skill" id="skills">
			<br></br>
			<br></br>
			<br></br>
			<br></br>

			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-bx wow zoomIn">
							<h1><b>SKILLS</b></h1><br></br>

							<h2>Programming Languages </h2><br></br>

							<Carousel
								responsive={responsive}
								infinite={true}
								className="owl-carousel owl-theme skill-slider"
							>
								<div className="item">
									<img src={C} alt="C" />
									<h5>C</h5>
								</div>
								<div className="item">
									<img src={CPP} alt="C++" />
									<h5>C++</h5>
								</div>
								<div className="item">
									<img src={java} alt="Java" />
									<h5>Java</h5>
								</div>
								<div className="item">
									<img src={Python} alt="Python" />
									<h5>Python</h5>
								</div>

								<div className="item">
									<img src={CSharp} alt="CSharp" />
									<h5>C#</h5>
								</div>
							</Carousel>

							<br></br><br></br>
							<h2>Web Technologies </h2><br></br>

							<Carousel
								responsive={responsive}
								infinite={true}
								className="owl-carousel owl-theme skill-slider"
							>
								<div className="item">
									<img src={html5} alt="html5" />
									<h5>HTML 5</h5>
								</div>
								<div className="item">
									<img src={css3} alt="css3" />
									<h5>CSS</h5>
								</div>
								<div className="item">
									<img src={javascript} alt="javascript" />
									<h5>Javascript</h5>
								</div>
								<div className="item">
									<img src={react} alt="react" />
									<h5>React js</h5>
								</div>
								<div className="item">
									<img src={nodejs} alt="nodejs" />
									<h5>Node js</h5>
								</div>
								<div className="item">
									<img src={expressjs} alt="expressjs" />
									<h5>Express js</h5>
								</div>
								<div className="item">
									<img src={mongodb} alt="mongodb" />
									<h5>MongoDB</h5>
								</div>
							</Carousel>

							<br></br><br></br>
							<h2>Others</h2><br></br>
								
							<Carousel
								responsive={responsive}
								infinite={true}
								className="owl-carousel owl-theme skill-slider"
							>
								<div className="item">
									<img src={git} alt="git" />
									<h5>Git</h5>
								</div>
								<div className="item">
									<img src={Github} alt="Github" />
									<br></br>
									<h5>GitHub</h5>
								</div>
								<div className="item">
									<br></br>
									<img src={sql} alt="sql" />
									<br></br><br></br>
									<h5>SQL</h5>
								</div>
							</Carousel>
							
						</div>
					</div>
				</div>
			</div>
			<img className="background-image-left" src={colorSharp1} alt="" />
			<img className="background-image-right" src={colorSharp2} alt="" />
		</section>
	);
};
