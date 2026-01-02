import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create Context
export const GameContext = createContext();

// Provider Component
export const GameProvider = ({ children }) => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [popular_game, set_popular_game] = useState([]);
  const [plartform_game, set_plartform_game] = useState([]);
  const [all_games, set_all_games] = useState([]);
  const [lottery_games, set_lotterygames] = useState([]);
  const [electric_games, set_electric_games] = useState([]);
  const [sports_games, set_sports_games] = useState([]);
  const [casino_games, set_casino_games] = useState([]);
  const [chesss_games, set_chesss_games] = useState([]);
  const [fish_games, set_fish_games] = useState([]);
  const [game, set_games] = useState([]);

  // State to store deposit data
  const [depositData, setDepositData] = useState([]);

  // Fetch user info from backend
  const fetchUserInfo = async () => {
    const user = JSON.parse(localStorage.getItem("user")); // Get user ID from localStorage
    if (!user) return;

    try {
      const response = await axios.get(`https://wingobd.onrender.com/user/user-info/${user._id}`);
      setUser(response.data);
    } catch (err) {
      console.error("Failed to fetch user info:", err);
    }
  };

  // Fetch all games
  const fetchAllGames = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://wingobd.onrender.com/admin/api-games/category");
      set_popular_game(response.data.find_popular_games);
      set_plartform_game(response.data.find_plartform_games);
      set_all_games(response.data.all_games);
      set_lotterygames(response.data.lottery_games);
      set_electric_games(response.data.electric_games);
      set_sports_games(response.data.sports_games);
      set_casino_games(response.data.casino_games);
      set_fish_games(response.data.fish_games);
      set_games(response.data.games);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch games");
    } finally {
      setLoading(false);
    }
  };

  // Fetch deposit by ID
  const fetchDepositById = async () => {
    const user = JSON.parse(localStorage.getItem("user")); // Get user ID from localStorage
    try {
      const response = await axios.get(`https://wingobd.onrender.com/user/user-deposits/${user._id}`);
      setDepositData(response.data.deposits);
      console.log(response.data.deposits)
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch deposit");
    } finally {
      setLoading(false);
    }
  };
   // Fetch deposit by ID
   const [withdrawal,set_withdrawal]=useState([])
   const fetchwithdrawById = async () => {
    const user = JSON.parse(localStorage.getItem("user")); // Get user ID from localStorage
    try {
      const response = await axios.get(`https://wingobd.onrender.com/user/withdraw/${user._id}`);
      set_withdrawal(response.data.data);
      console.log(response.data.data)
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch withdraw");
    } finally {
      setLoading(false);
    }
  };
useEffect(()=>{
  fetchDepositById();
  fetchwithdrawById();
},[])
  return (
    <GameContext.Provider
      value={{
        user,
        games,
        fetchAllGames,
        fetchUserInfo,
        fetchDepositById, // Function to fetch deposit
        depositData, // Store fetched deposit data
        loading,
        error,
        popular_game,
        plartform_game,
        all_games,
        lottery_games,
        electric_games,
        sports_games,
        casino_games,
        chesss_games,
        fish_games,
        game,
        depositData,
        fetchwithdrawById,
        withdrawal
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
