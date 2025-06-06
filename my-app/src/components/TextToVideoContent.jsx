import React, { useState } from "react";
import { Upload } from "lucide-react";

const TextToVideoContent = () => {
  const [activeTab, setActiveTab] = useState("URL");
  const [blogUrl, setBlogUrl] = useState("");
  const [textContent, setTextContent] = useState("");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file.name);
    }
  };

  const handleImportContent = () => {
    if (activeTab === "URL" && blogUrl) {
      console.log("Importing from URL:", blogUrl);
    } else if (activeTab === "Text" && textContent) {
      console.log("Importing text content:", textContent);
    }
  };

  return (
    <div style={{ backgroundColor: "#ffffff", color: "#000000" }} className="p-6">
      <div className="mb-8">
        <h2 style={{ color: "#000000" }} className="text-4xl font-bold mb-4">
          Turn Your Text into Stunning Videos
        </h2>
        <p style={{ color: "#333333" }} className="text-lg">
          Start with text, and transform it into engaging videos — ready to
          share, promote, and inspire.
        </p>
      </div>

      <div style={{ backgroundColor: "#ffffff" }} className="rounded-lg border-2 border-black shadow-lg p-8">
        <h3 style={{ color: "#000000" }} className="text-2xl font-bold mb-2">
          Import Blog Content
        </h3>
        <p style={{ color: "#555555" }} className="mb-6">
          Choose how you want to bring in your blog
        </p>

        <div className="flex space-x-2 mb-6">
          {[
            { id: "URL", label: "URL", icon: "🔗" },
            { id: "Text", label: "Text", icon: "📝" },
            { id: "File", label: "File", icon: "📁" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={
                activeTab === tab.id
                  ? { backgroundColor: "#000000", color: "#ffffff" }
                  : { backgroundColor: "#f5f5f5", color: "#333333", border: "1px solid #ccc" }
              }
              className="flex items-center space-x-2 px-6 py-3 rounded-lg font-medium"
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="mb-6">
          {activeTab === "URL" && (
            <input
              type="text"
              placeholder="Paste Blog URL Here"
              value={blogUrl}
              onChange={(e) => setBlogUrl(e.target.value)}
              style={{
                backgroundColor: "#ffffff",
                color: "#000000",
                border: "1px solid #ccc",
              }}
              className="w-full p-3 rounded-md"
            />
          )}

          {activeTab === "Text" && (
            <textarea
              placeholder="Paste your text content here..."
              value={textContent}
              onChange={(e) => setTextContent(e.target.value)}
              rows={6}
              style={{
                backgroundColor: "#ffffff",
                color: "#000000",
                border: "1px solid #ccc",
              }}
              className="w-full p-3 rounded-md"
            />
          )}

          {activeTab === "File" && (
            <div
              style={{ backgroundColor: "#ffffff" }}
              className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
            >
              <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p style={{ color: "#333" }} className="mb-2">
                Drag and drop your file here, or click to browse
              </p>
              <p style={{ color: "#666" }} className="text-sm mb-4">
                Supports .txt, .doc, .docx files
              </p>
              <input
                type="file"
                onChange={handleFileUpload}
                className="hidden"
                accept=".txt,.doc,.docx"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                style={{
                  backgroundColor: "#f5f5f5",
                  color: "#333",
                  border: "1px solid #ccc",
                }}
                className="cursor-pointer px-4 py-2 rounded-lg transition-colors hover:bg-gray-200"
              >
                Choose File
              </label>
            </div>
          )}
        </div>

        <button
          onClick={handleImportContent}
          className="bg-gradient-to-r from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
        >
          <Upload className="w-4 h-4" />
          <span>Import Content</span>
        </button>
      </div>
    </div>
  );
};

export default TextToVideoContent;
