import { useState } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [count, setCount] = useState(0)

  const navigate = useNavigate();
  const handleClick = () => navigate('/Login');

  return (
    <>
    <div className="bg-[#fefae0] text-3xl font-mono text-[14px] text-[#161a1d] flex items-center justify-center h-screen">
      <button className="hover:bg-lime-700" onClick={handleClick}>
      <TypeAnimation
          sequence={[
            'yurbys_art_gallery', // Types 'One'
            2000, // Waits 2s
            'login/create.account?',
            () => {
              console.log('Sequence completed');
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={0}
          style={{ fontSize: '2em', display: 'inline-block' }}
          speed={25}
        />
      </button>
    </div>
    </>
  )
}

export default Home