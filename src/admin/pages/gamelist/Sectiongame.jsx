import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import Header from "../../common/Header";

const Sectiongame = () => {
  const [games, setGames] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch games from the API
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axios.get("https://wingobd.onrender.com/admin/all-api-games");
        setGames(response.data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };
    fetchGames();
  }, []);

  // Handle game deletion
  const deleteGame = async (gameId) => {
    if (!window.confirm("Are you sure you want to delete this game?")) return;
    
    try {
      await axios.delete(`http://data.eassypay.com/admin/delete-game/${gameId}`);
      setGames(games.filter((game) => game._id !== gameId));
    } catch (error) {
      console.error("Error deleting game:", error);
    }
  };

  // Filter games based on search query
  const filteredGames = games.filter((game) =>
    game.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full font-bai">
      <Header />
      <section className="p-4">
        <div className="">
          <div className="w-full">
            <h1 className="text-2xl font-semibold text-gray-700 mb-6">Unibet Hub Games</h1>
            <div className="flex justify-between items-center mb-4">
              <div className="relative w-[40%]">
                <input
                  type="text"
                  placeholder="Search Games..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
                <FiSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
              </div>
              <NavLink to="/admin-dashboard/unibethub-add-game">
                <button className="bg-[#071251] text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none">+ Add New</button>
              </NavLink>
            </div>
            <div className="overflow-x-auto border border-gray-300">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-[#071251] text-center text-white">
                    <th className="py-3 px-4">Game Name</th>
                    <th className="py-3 px-4">Url</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredGames.map((game) => (
                    <tr key={game._id} className="border-b border-gray-300 text-center">
                      <td className="py-3 px-4 text-gray-800 font-semibold border-r border-gray-300">{game.name}</td>
                      <td className="py-3 px-4 text-gray-800 font-medium border-r border-gray-300">{game.liveUrl}</td>
                      <td className="py-3 px-4 border-r border-gray-300">
                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Enabled</span>
                      </td>
                      <td className="py-3 px-4 flex items-center justify-center space-x-2">
                        <NavLink to={`/admin-dashboard/unibethub-game-details/${game._id}`}>
                          <button className="flex items-center border bg-[#071251] border-[#071251] hover:border-yellow-500 px-3 py-1 rounded-md text-white hover:text-black hover:bg-yellow-500 transition-all duration-150">
                            <AiOutlineEdit className="mr-1" /> Edit
                          </button>
                        </NavLink>
                        <button
                          onClick={() => deleteGame(game._id)}
                          className="flex items-center text-white border bg-red-500 cursor-pointer hover:bg-red-700 transition-all duration-200 border-red-600 px-3 py-1 rounded-md focus:outline-none"
                        >
                          <AiOutlineDelete className="mr-1" /> Disable
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sectiongame;
