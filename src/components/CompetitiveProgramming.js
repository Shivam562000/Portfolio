import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp1 from '../assets/img/color-sharp.png';
import colorSharp2 from '../assets/img/color-sharp2.png';

import leetcode from '../assets/img/LeetCode_logo_black.png';
import hackerrank from '../assets/img/HackerRank.png';
import gfglogo from '../assets/img/gfglogo.png';
import codechef from '../assets/img/codechef.png';

export const CompetitiveProgramming = () => {
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
		<section className="project" id="competitiveProgramming">
			<br></br>
			<br></br>
			<br></br>

			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="skill-bx wow zoomIn">
							<h1>CODING PROFILES</h1>
							<p>
								<br></br>
							</p>
							<Carousel
								responsive={responsive}
								infinite={true}
								className="owl-carousel owl-theme skill-slider"
							>							
								<div className="item">
									<a
										href="https://leetcode.com/Shivam242424/"
										target="_blank"
										rel="noreferrer"
									>
										<img src={leetcode} alt="leetcode" />
									</a>
									<h5>LeetCode</h5>
									<h6>Rating : 1624</h6>
									<p>Solved 850+ problems</p>
								</div>
								<div className="item">
									<a
										href="https://www.codechef.com/users/shivam562000"
										target="_blank"
										rel="noreferrer"
									>
										<img src={codechef} alt="codechef" />
									</a>
									<h5>CodeChef</h5>
									<h6>Rating : 1915 &nbsp;&nbsp; 4⭐️</h6>
									<p>Solved 175+ problems</p>
								</div>
								<div className="item">
									<a
										href="https://www.hackerrank.com/shivamchougule_1?hr_r=1"
										target="_blank"
										rel="noreferrer"
									>
										<img src={hackerrank} alt="hackerrank" />
									</a>
									<h5>HackerRank</h5>
									<h6>Gold level</h6>
									<p>Solved 200+ problems</p>
								</div>
							
								<div className="item">
									<a
										href="https://auth.geeksforgeeks.org/user/shivamchougule200056/profile"
										target="_blank"
										rel="noreferrer"
									>
										<img src={gfglogo} alt="gfglogo" />
									</a>
									<h5>GeeksforGeek</h5>
									<p>Solved 100+ problems</p>
								</div>

							</Carousel>
						</div>
					</div>
				</div>
			</div>
			<img className="background-image-left" src={colorSharp1} alt="" />
			<img className="background-image-right" src={colorSharp2} alt="" />
			<br></br>
			<br></br>
			<br></br>
		</section>
	);
};
