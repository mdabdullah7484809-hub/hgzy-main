import { useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Header from "../../common/Header";

const Addsectiongame = () => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [liveUrl, setLiveUrl] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!category) return toast.error("Category is required");
    if (!image) return toast.error("Please upload an image");
    if (!liveUrl) return toast.error("Live URL is required");

    const formData = new FormData();
    formData.append("category", category);
    formData.append("name", name);
    formData.append("liveUrl", liveUrl);
    formData.append("image", image);

    try {
      const response = await axios.post("https://wingobd.onrender.com/admin/add-api-game", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 201) {
        toast.success("Game added successfully!");
        setCategory("");
        setName("");
        setLiveUrl("");
        setImage(null);
        setPreview(null);
      }
    } catch (error) {
      console.error("Error adding game:", error);
      toast.error("Failed to add game");
    }
  };

  return (
    <section className="w-full overflow-y-auto h-[100vh]">
      <Header />
      <div className="p-6 bg-gray-50 min-h-screen">
        <Toaster />
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Add New Game</h2>

        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
          {/* Category Selection */}
          <label className="block mb-2 text-gray-700 font-medium">Select Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border p-2 rounded-md mb-4"
          >
            <option value="">Choose Category</option>
            <option value="জনপ্রিয়">জনপ্রিয়</option>
            <option value="প্ল্যাটফর্ম সুপারিশ">প্ল্যাটফর্ম সুপারিশ</option>
            <option value="লটারি">লটারি</option>
            <option value="বৈদ্যুতিক">বৈদ্যুতিক</option>
            <option value="স্পোর্টস">স্পোর্টস</option>
            <option value="ক্যাসিনো গেম">ক্যাসিনো গেম</option>
            <option value="দাবা">দাবা</option>
            <option value="মাছ শিকার">মাছ শিকার</option>
            <option value="গেমস">গেমস</option>

          </select>

          {/* Optional Name Field */}
          <label className="block mb-2 text-gray-700 font-medium">Game Name (Optional)</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded-md mb-4"
            placeholder="Enter game name"
          />

          {/* Live URL Field */}
          <label className="block mb-2 text-gray-700 font-medium">Live Game URL</label>
          <input
            type="url"
            value={liveUrl}
            onChange={(e) => setLiveUrl(e.target.value)}
            className="w-full border p-2 rounded-md mb-4"
            placeholder="Enter live game URL"
          />

          {/* Image Upload */}
          <label className="block mb-2 text-gray-700 font-medium">Upload Game Image</label>
          <div className="flex items-center gap-4">
            <input type="file" accept="image/*" onChange={handleImageChange} className="hidden" id="fileUpload" />
            <label
              htmlFor="fileUpload"
              className="cursor-pointer flex items-center gap-2 border p-2 rounded-md bg-gray-100 hover:bg-gray-200"
            >
              <FaCloudUploadAlt size={20} />
              Upload Image
            </label>
          </div>

          {/* Image Preview */}
          {preview && <img src={preview} alt="Preview" className="mt-4 w-40 h-40 object-cover rounded-md" />}

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Add Game
          </button>
        </form>
      </div>
    </section>
  );
};

export default Addsectiongame;
