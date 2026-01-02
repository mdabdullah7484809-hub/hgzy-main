import { useContext } from "react";
import { useParams } from "react-router-dom";
import { GameContext } from "../context/GameContext";

const DemoGame = () => {
  const { id } = useParams();
  const { all_games } = useContext(GameContext);

  const game = all_games?.find((game) => game._id === id);

  return (
    <div>
      <iframe
        className="w-full h-[90vh] max-h-screen"
        src={game?.liveUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default DemoGame;
