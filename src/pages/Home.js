import React from "react";
import ProfilePic from "../components/images/dev-profile-web.jpg";
import Header from "../components/end-caps/Header";

const Home = () => {
	return (
		<>
			<Header />
			<main className="vh">
				{/* image */}
				{/* <section>
                    <img src={ProfilePic} alt="profile pic" />
                </section> */}
				{/* bio */}
				<section className="bio">
					<h2>Hello, I'm Dev.</h2>
					<p>
						I’m a web designer and musician based in Dallas, Texas.
					</p>
					<p>
						I got into graphic design and basic HTML back when
						MySpace was a thing and utilized that energy making
						flyers for bands on social media over the years. It
						wasn't until experiencing burnout in a former industry that I needed to go back to my first love: building websites.
					</p>
					<p>
						Feel free to have a look around! This portfolio was
						built in React using Chakra-UI as my base styling. My
						prototype was created using Adobe XD and all my artwork is with Photoshop. Be sure to check out my SOCIALS link	if you would like to get in contact with me or preview my artwork. I look forward to working on your next project.
					</p>
				</section>
			</main>
		</>
	);
};

export default Home;
