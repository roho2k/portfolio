import BackgroundContainer from '../components/BackgroundContainer';
import GithubIcon from '../assets/icons/github-icon.svg?react';
import LinkedInIcon from '../assets/icons/linkedin-icon.svg?react';
import classNames from 'classnames';

export default function About() {
	return (
		<BackgroundContainer>
			<div>
				<section>
					<div className='flex justify-center'>
						<img
							className='rounded-full h-48'
							src='https://mlwfrbilrjnxdjvduhxp.supabase.co/storage/v1/object/public/portfolio-blog-post-bucket/profile-picture.jpg'
							alt='profile-picture'
						/>
					</div>
					<div className='flex flex-col justify-center items-center mt-4'>
						<h2 className='font-bold text-2xl'>Rodney Ho</h2>
						<h3 className='font-semibold opacity-65'>
							Software Engineer
						</h3>
					</div>
				</section>
				<section
					className={classNames(
						['prose my-8'],
						['lg:mx-20 lg:mt-14 lg:mb-10']
					)}
				>
					<p>
						Hello! I'm Rodney. I'm a passionate Software Engineer
						with 5 years of experience building dynamic, responsive,
						and scalable web applications. I specialize in building
						end-to-end web applications that are scalable,
						efficient, and user-friendly. My expertise lies in React
						for crafting dynamic, responsive UIs, while leveraging
						back-end technologies like Node.js, Express, and various
						databases (SQL, MongoDB) to create scaling APIs.
					</p>
					<p>
						When I’m not coding I enjoy building woodworking
						projects, reading new books, and discovering music in
						different languages. If you come across me, you might
						find me drinking coffee and learning new things on the
						internet.
					</p>
				</section>

				<section className='flex justify-center [&>a]:mx-2'>
					<a
						href='https://github.com/roho2k'
						target='_blank'
						rel='noopener noreferrer'
						className='h-8 w-8 hover:text-violet-300 hover:cursor-pointer'
					>
						<GithubIcon />
					</a>
					<a
						href='https://www.linkedin.com/in/rodney-ho-211705168/'
						target='_blank'
						rel='noopener noreferrer'
						className='h-8 w-8 hover:text-violet-300 hover:cursor-pointer'
					>
						<LinkedInIcon />
					</a>
				</section>
			</div>
		</BackgroundContainer>
	);
}
