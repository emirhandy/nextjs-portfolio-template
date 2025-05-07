'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Link from '@tiptap/extension-link';

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export default function RichTextEditor({ content, onChange }: RichTextEditorProps) {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div className="border border-gray-700 rounded-lg p-4 bg-gray-800">
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`p-2 rounded text-white ${
            editor.isActive('bold')
              ? 'bg-indigo-600'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          Kalın
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`p-2 rounded text-white ${
            editor.isActive('italic')
              ? 'bg-indigo-600'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          İtalik
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={`p-2 rounded text-white ${
            editor.isActive('heading', { level: 2 })
              ? 'bg-indigo-600'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          Başlık
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`p-2 rounded text-white ${
            editor.isActive('bulletList')
              ? 'bg-indigo-600'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          Madde İşaretli Liste
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`p-2 rounded text-white ${
            editor.isActive('orderedList')
              ? 'bg-indigo-600'
              : 'bg-gray-700 hover:bg-gray-600'
          }`}
        >
          Numaralı Liste
        </button>
        <button
          onClick={() => {
            const url = window.prompt('Resim URL\'sini girin');
            if (url) {
              editor.chain().focus().setImage({ src: url }).run();
            }
          }}
          className="p-2 rounded text-white bg-gray-700 hover:bg-gray-600"
        >
          Resim Ekle
        </button>
        <button
          onClick={() => {
            const url = window.prompt('Link URL\'sini girin');
            if (url) {
              editor.chain().focus().setLink({ href: url }).run();
            }
          }}
          className="p-2 rounded text-white bg-gray-700 hover:bg-gray-600"
        >
          Link Ekle
        </button>
      </div>
      <EditorContent
        editor={editor}
        className="prose prose-invert max-w-none focus:outline-none"
      />
    </div>
  );
} 