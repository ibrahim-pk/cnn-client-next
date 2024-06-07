import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import { useRouter } from "next/router";
import { authUrl } from "@/Jwt/Jwt";
import AdminLayout from "@/Layout/AdminLayout";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

function UpdateNews() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [updatedSelectedFile, setUpdatedSelectedFile] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [error, setError] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [base64File, setBase64File] = useState("");
  const [editorText, setEditorText] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [selectedNewsCategory, setSelectedNewsCategory] = useState("");
  const [selectedNewsSubCategory, setSelectedNewsSubCategory] = useState("");
  const [NewsCategorys, setNewsCategorys] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const [isImage, setIsImage] = useState(null);
  const [isVideo, setIsVideo] = useState(null);
  const [filename, setFilename] = useState(null);
  const [file, setFile] = useState(null);
  const IMAGE_TYPES = ["jpeg", "jpg", "gif", "png", "webp"];
  const VIDEO_TYPES = ["mp4", "webm", "ogg"];

  const handleEditorChange = (content) => {
    setEditorText(content);
  };

  const getFileType = (fileString) => {
    const fileName = fileString?.split("/").pop();
    const fileExtension = fileName?.split(".").pop();
    return fileExtension?.toLowerCase();
  };

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const typeResponse = await axios.get("https://api.bartaloy24.com/api/types");
        setTypes(typeResponse?.data);
      } catch (error) {
        console.error("Error fetching types:", error?.message);
      }
    };
    fetchTypes();
  }, []);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const tagResponse = await axios.get("https://api.bartaloy24.com/api/tags");
        setTags(tagResponse?.data);
      } catch (error) {
        console.error("Error fetching tags:", error?.message);
      }
    };
    fetchTags();
  }, []);

  useEffect(() => {
    axios
      .get("https://api.bartaloy24.com/api/getAllNewsCategories")
      .then((response) => {
        setNewsCategorys(response?.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedNewsCategory) {
      axios
        .get(`https://api.bartaloy24.com/api/getSubcategories/${selectedNewsCategory}`)
        .then((response) => {
          setSubcategories(response?.data);
        })
        .catch((error) => {
          console.error("Error fetching subcategories:", error);
        });
    }
  }, [selectedNewsCategory]);

  useEffect(() => {
    const fetchNewsData = async () => {
      if (router?.query?.id) {
        axios
          .get(`https://api.bartaloy24.com/getNewsByID/${router?.query?.id}`)
          .then((res) => {
            const fileTypes = getFileType(res?.data?.file);
            setTitle(res?.data?.title);
            setAuthorName(res?.data?.authorName);
            setSelectedNewsCategory(res?.data?.newsCategory);
            setSelectedNewsSubCategory(res?.data?.subCategory);
            setEditorText(res?.data?.editorText);
            setFilename(res?.data?.file);
            setSelectedType(res?.data?.type);
            setSelectedTag(res?.data?.tag);
            setIsImage(IMAGE_TYPES.includes(fileTypes));
            setIsVideo(VIDEO_TYPES.includes(fileTypes));
            axios
              .get(`https://api.bartaloy24.com/filesForNewsByFilename/${res.data?.file}`, { responseType: "arraybuffer" })
              .then((res) => {
                const contentType = res.headers["content-type"];
                const blob = new Blob([res.data], { type: contentType });
                const dataURL = URL.createObjectURL(blob);
                setUpdatedSelectedFile(dataURL);
              })
              .catch((err) => {
                console.error(err);
              });
          })
          .catch((err) => {
            console.error(err);
          });
      }
    };
    fetchNewsData();
  }, [router?.query?.id]);

  const handleNewsCategoryChange = (e) => {
    setSelectedNewsCategory(e.target.value);
  };

  const handleNewsSubCategoryChange = (e) => {
    setSelectedNewsSubCategory(e.target.value);
  };

  const handleNewstypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleNewstagChange = (e) => {
    setSelectedTag(e.target.value);
  };

  const handleDataSubmit = async (e) => {
    e.preventDefault();
    let newsData = new FormData();
    newsData.append("id", router?.query?.id);
    newsData.append("title", title);
    if (selectedFile) {
      newsData.append("file", selectedFile);
    }
    newsData.append("newsCategory", selectedNewsCategory);
    newsData.append("subCategory", selectedNewsSubCategory);
    newsData.append("type", selectedType);
    newsData.append("editorText", editorText);
    newsData.append("tag", selectedTag);
    newsData.append("authorName", authorName);
    newsData.append("filename", filename);

    try {
      const response = await axios.post(
        "https://api.bartaloy24.com/api/updatenews",
        newsData,
        authUrl
      );
      alert("Article Succesfully updated.");
    } catch (error) {
      console.error("Error sending data", error);
    }
  };

  return (
    <>
      <div className="mt-28">
        <div className="mx-auto bg-white drop-shadow-md w-10/12 rounded">
          <h3 className="p-6 font-bold mb-8 text-black border-b">
            Write News Article
          </h3>
          <div className="container p-5">
            <form onSubmit={handleDataSubmit}>
              <div className="mb-10">
                <label htmlFor="title" className="block text-sm text-gray-600">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                />
              </div>
              <div className="mb-10">
                <label htmlFor="newsType" className="block text-sm text-gray-600">
                  News Type
                </label>
                <select
                  id="NewsType"
                  name="NewsType"
                  value={selectedType}
                  onChange={handleNewstypeChange}
                  className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                >
                  <option value="" disabled>
                    Select News Type
                  </option>
                  {types.map((types) => (
                    <option value={types?.name} key={types?._id}>
                      {types?.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-10">
                <label className="block text-sm text-gray-600">Upload File</label>
                <input
                  type="text"
                  placeholder="Paste Public Google Drive Link "
                  value={selectedFile}
                  onChange={(e) => setSelectedFile(e.target.value)}
                  className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                />
                <div className="relative mt-4">
                  {updatedSelectedFile && (
                    <>
                      {isImage && (
                        <img
                          src={updatedSelectedFile}
                          alt="Preview"
                          className="h-64 w-full object-cover"
                        />
                      )}
                      {isVideo && (
                        <video controls className="h-64 w-full object-cover">
                          <source src={updatedSelectedFile} />
                        </video>
                      )}
                    </>
                  )}
                </div>
              </div>

              <div className="mb-10">
                <label
                  htmlFor="category"
                  className="block text-sm text-gray-600"
                >
                  News Category
                </label>
                <select
                  id="category"
                  name="category"
                  value={selectedNewsCategory}
                  onChange={handleNewsCategoryChange}
                  className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                >
                  <option value="" disabled>
                    Select News Category
                  </option>
                  {NewsCategorys.map((category) => (
                    <option value={category?.title} key={category?._id}>
                      {category?.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-10">
                <label
                  htmlFor="subcategory"
                  className="block text-sm text-gray-600"
                >
                  News Subcategory
                </label>
                <select
                  id="subcategory"
                  name="subcategory"
                  value={selectedNewsSubCategory}
                  onChange={handleNewsSubCategoryChange}
                  className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                >
                  <option value="" disabled>
                    Select News Subcategory
                  </option>
                  {subcategories.map((subcategory) => (
                    <option value={subcategory?.title} key={subcategory?._id}>
                      {subcategory?.title}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-10">
                <label
                  htmlFor="authorName"
                  className="block text-sm text-gray-600"
                >
                  Author Name
                </label>
                <input
                  type="text"
                  id="authorName"
                  name="authorName"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                />
              </div>
              <div className="mb-10">
                <label htmlFor="tag" className="block text-sm text-gray-600">
                  Tag
                </label>
                <select
                  id="tag"
                  name="tag"
                  value={selectedTag}
                  onChange={handleNewstagChange}
                  className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                >
                  <option value="" disabled>
                    Select News Tag
                  </option>
                  {tags.map((tags) => (
                    <option value={tags?.name} key={tags?._id}>
                      {tags?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-10">
                <label
                  htmlFor="editorText"
                  className="block mb-2 text-sm text-gray-600"
                >
                  Content
                </label>
                <ReactQuill
                  id="editorText"
                  value={editorText}
                  onChange={handleEditorChange}
                  placeholder="Write something..."
                  modules={UpdateNews.modules}
                  formats={UpdateNews.formats}
                  className="focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none"
              >
                Update Article
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

UpdateNews.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
  ],
};

UpdateNews.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
];

UpdateNews.layout = AdminLayout;

export default UpdateNews;
