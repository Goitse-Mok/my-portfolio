'use client';
import { useState, useEffect } from 'react';
import { remark } from 'remark';
import html from 'remark-html';

export default function BlogEditorPage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [previewHtml, setPreviewHtml] = useState('');
  const [savedPosts, setSavedPosts] = useState([]);

  // Load saved posts from localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('localBlogPosts') || '[]');
    setSavedPosts(data);
  }, []);

  const handlePreview = async () => {
    const processedContent = await remark().use(html).process(content);
    setPreviewHtml(processedContent.toString());
  };

  const handleSave = () => {
    const post = {
      id: Date.now(),
      title,
      description,
      date,
      tags: tags.split(',').map(t => t.trim()),
      content
    };

    const updatedPosts = [...savedPosts, post];
    localStorage.setItem('localBlogPosts', JSON.stringify(updatedPosts));
    setSavedPosts(updatedPosts);

    setTitle('');
    setDescription('');
    setDate('');
    setTags('');
    setContent('');
    setPreviewHtml('');
    alert('Post saved to localStorage ✅');
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-[#054160] mb-6">📝 Blog Post Editor</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Editor */}
        <div>
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Post Title"
            className="w-full border px-4 py-2 rounded mb-4"
          />
          <input
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="Short Description"
            className="w-full border px-4 py-2 rounded mb-4"
          />
          <input
            type="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            className="w-full border px-4 py-2 rounded mb-4"
          />
          <input
            value={tags}
            onChange={e => setTags(e.target.value)}
            placeholder="Tags (comma separated)"
            className="w-full border px-4 py-2 rounded mb-4"
          />
          <textarea
            value={content}
            onChange={e => setContent(e.target.value)}
            rows="10"
            placeholder="Write your markdown content here..."
            className="w-full border px-4 py-2 rounded mb-4"
          ></textarea>
          <div className="flex gap-4">
            <button
              onClick={handlePreview}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Preview
            </button>
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </div>

        {/* Preview */}
        <div>
          <h3 className="text-xl font-semibold mb-2">🔍 Live Preview</h3>
          <div
            className="prose max-w-none border p-4 rounded bg-gray-50"
            dangerouslySetInnerHTML={{ __html: previewHtml }}
          ></div>
        </div>
      </div>
    </section>
  );
}
