import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate();
  const handleClick = () => navigate('/Login');

  return (
    <>
    <div className="bg-[#424549] text-3xl font-mono text-[14px] text-[#ffffff] flex items-center justify-center h-screen">
      <button className="hover:bg-[#36393e] text-[#ffffff] font-semibold py-2 px-4 border border-[#424549] rounded-2xl" onClick={handleClick}>
      <TypeAnimation
          sequence={[
            'yurbys_art_gallery', // Types 'One'
            1000, // Waits 2s
            () => {
              console.log('Sequence completed');
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={0}
          style={{ fontSize: '2em', display: 'inline-block' }}
          speed={30}
        />
      </button>
    </div>
    </>
  )
}

export default Home