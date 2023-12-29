import Link from 'next/link';
import Image from 'next/image';
import teamImage from './team-amico.svg';
const HeroWork = () => {
  return (
    <section className="w-full h-screen bg-[#090E34] flex justify-center items-center">
      <div className='w-9/12 flex flex-row justify-between items-center'>
        <div className='w-full flex flex-col justify-center items-start gap-4'>
          <h1 className="text-4xl text-white capitalize font-bold">Work with us</h1>
          <p className="text-lg text-white">
            Are you seeking new professional opportunities? You're in the right place! At UltraCode, we value talent and dedication. We're in constant growth and on the lookout for passionate individuals who want to be part of our extraordinary team.
            <br /><br />
            Submit your resume now and take the first step toward an exciting career with us. We're eager to learn about your experience and skills. Together, we can build a successful future.
          </p>
          <Link href={'#form-work'} className="rounded-md bg-[#4A6CF7] py-3 px-10 text-base capitalize font-semibold  text-white duration-300 ease-in-out hover:bg-blue-500/60">
            Submit Resume
          </Link>
        </div>
        <Image src={teamImage} width={100} height={100} className='w-6/12' alt='hero-image' priority={true}/>
      </div>
    </section>
  )
}
export default HeroWork;