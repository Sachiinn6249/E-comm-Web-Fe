import { Player, Controls } from '@lottiefiles/react-lottie-player';

const LottieAnimation = ({ animationData, width = '100%', height = 'auto' }) => {
  return (
    <Player
      autoplay
      loop
      src={animationData}
      style={{ width, height }}
    >
      {/* Consider hiding controls by default for cleaner UI */}
      <Controls visible={false} buttons={['play', 'repeat', 'debug']} />
    </Player>
  );
};

export default LottieAnimation;