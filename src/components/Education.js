import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp1 from '../assets/img/color-sharp.png';
import colorSharp2 from '../assets/img/color-sharp2.png';


export const Education = () => {
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
    function EducationCard() {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };

        return (
          <Carousel activeIndex={index} onSelect={handleSelect}  >
            <Carousel.Item>
            <div className="containerForAlignColumn left"></div>
            <div className="containerForAlignColumn middle">
                <h1>Walchand College Of Engineering, Sangli</h1>
                <p>B.TECH CSE &nbsp;&nbsp; | &nbsp;&nbsp; CGPI : 8.2 / 10 &nbsp;&nbsp; | &nbsp;&nbsp;  2018 - 2022</p>
                <p style={{"text-align" : "left"}}>
                    I have completed Bachelor's in Technology in Computer Science & Engineering majors.
                    Over the period, I have covered the CS fundamentals courses like
                    <ul >
                        <li>Data Structures & Algorithms</li>
                        <li>Database Management Systems</li>
                        <li>Operating System</li>
                        <li>Object Oriented Programming</li>
                        <li>Computer Networks</li>
                    </ul>
                    and have good understanding of them. I have also been part of various college societies and events.
                    <br></br>
                    <li>Selected for Cummins Scholarship Program.</li>
                    <br></br>&nbsp;&nbsp;
                </p>
            </div>
            <div className="containerForAlignColumn right"></div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="containerForAlignColumn left"></div>
            <div className="containerForAlignColumn middle">
                <h1>Tatysaheb Musale College, Ichalkaranji</h1>
                <p>HSC Board : 87.54 %  &nbsp;&nbsp; |   &nbsp;&nbsp; MHT-CET : 154 / 200  &nbsp;&nbsp; |   &nbsp;&nbsp;  2016 - 2018</p>
                <p style={{"text-align" : "left"}}>
                    I have completed my Higher Secondary Education in Science with 
                    <ul >
                        <li>Physics</li>
                        <li>Chemistry</li>
                        <li>Mathematics</li>
                        <li>Electronics</li>
                    </ul>
                    Maths = 100 / 100.
                    <br></br>&nbsp;&nbsp;
                    <br></br>&nbsp;&nbsp;
                    <br></br>&nbsp;&nbsp;
                    <br></br>&nbsp;&nbsp;
                    <br></br>&nbsp;&nbsp;
                </p>
            </div>
            <div className="containerForAlignColumn right"></div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="containerForAlignColumn left"></div>
            <div className="containerForAlignColumn middle">
                <h1>Sanmati Vidyalaya,Tardal</h1>
                <p>SSC Board : 97.40 % &nbsp;&nbsp; | &nbsp;&nbsp;  2010 - 2016</p>
                <p style={{"text-align" : "left"}}>
                    I have completed my Secondary Education where I was involved in various educational & social activities.
                    <br></br>&nbsp;&nbsp;
                    <ul >
                        <li>Secured 1 st Rank in SSC at Sanmati Vidyalaya ,Tardal</li>
                        <li>Selected for NMMS Scholarship (National Level Exam)</li>
                    </ul>
                    <br></br>&nbsp;&nbsp;
                    <br></br>&nbsp;&nbsp;
                    <br></br>&nbsp;&nbsp;
                    <br></br>&nbsp;&nbsp;
                    <br></br>&nbsp;&nbsp;
                    <br></br>&nbsp;&nbsp;        
                    <br></br>&nbsp;&nbsp;
                </p>
            </div>
            <div className="containerForAlignColumn right"></div>
            </Carousel.Item>
          </Carousel>
        );
    }

	return (
		<section className="skill" id="education" >
			<br></br>
			<br></br>
			<br></br>            			
            <div className="container" >
				<div className="row">
					<div className="col-12">
						<div className="skill-bx wow zoomIn">
							<h1>EDUCATION</h1>
							<p>
								<br></br>
							</p>

                            {EducationCard()}
                            
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
