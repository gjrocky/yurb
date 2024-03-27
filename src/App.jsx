import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { TypeAnimation } from 'react-type-animation';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="bg-[#fefae0] text-3xl font-mono text-[14px] text-[#161a1d] flex items-center justify-center h-screen">
      <button>
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
  )
}

export default App
