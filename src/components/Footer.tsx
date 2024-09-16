export default function Footer() {
	return (
		<div className='flex justify-center items-center h-24 text-space-blue-300 shadow-[0_4px_4px_4px_rgba(0,0,0,0.3)]'>
			Designed & Built by Rodney Ho &copy; {new Date().getFullYear()}
		</div>
	);
}
