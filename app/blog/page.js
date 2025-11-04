'use client';

import { useEffect, useState } from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function BlogPage() {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');

  // Load localStorage posts
  useEffect(() => {
    const localPosts = JSON.parse(localStorage.getItem('localBlogPosts') || '[]');
    setAllPosts(localPosts);
    setFilteredPosts(localPosts);
  }, []);

  // Filter by search + tag
  useEffect(() => {
    const filtered = allPosts.filter(post => {
      const matchSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchTag = selectedTag
        ? post.tags?.map(t => t.toLowerCase()).includes(selectedTag.toLowerCase())
        : true;

      return matchSearch && matchTag;
    });

    setFilteredPosts(filtered);
  }, [searchTerm, selectedTag, allPosts]);

  const uniqueTags = [...new Set(allPosts.flatMap(post => post.tags || []))];

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-[#054160] mb-6">📚 Blog</h2>

      {/* Search and Tag Filter */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <input
          type="text"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 border px-4 py-2 rounded"
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag('')}
            className={`px-3 py-1 rounded-full border ${selectedTag === '' ? 'bg-[#054160] text-white' : 'text-[#054160]'}`}
          >
            All
          </button>
          {uniqueTags.map((tag, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded-full border ${
                selectedTag === tag ? 'bg-[#054160] text-white' : 'text-[#054160]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Posts */}
      <ul className="space-y-6">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <li key={post.id} className="border p-4 rounded-lg">
              <h3 className="text-xl font-semibold text-[#054160]">{post.title}</h3>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="mt-2 text-gray-700">{post.description}</p>
              <div className="flex gap-2 mt-2 flex-wrap">
                {post.tags?.map((tag, i) => (
                  <span key={i} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-6">No posts found.</p>
        )}
      </ul>
    </section>
  );
}
