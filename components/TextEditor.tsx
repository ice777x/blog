"use client";
import React, { useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useRouter } from "next/navigation";

const cred = process.env.NEXT_PUBLIC_TPASS;
export default function TextEditor() {
  const [pass, setPass] = React.useState<string>("");
  const [editorState, setEditorState] = React.useState<any>(null);
  const [html, setHtml] = React.useState<string>("");
  const [text, setText] = React.useState<string>("");
  const [ok, setOk] = React.useState<boolean>(false);
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const [title, image] = e.target;
    const res = await fetch("/api/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title.value,
        image: image.value,
        content: html,
        text: text,
      }),
    });
    const json = await res.json();
    if (json.status === 200) {
      setOk(true);
      setTimeout(() => {
        router.push(`/post/${json.post.id}`);
      }, 3000);
    }
  };
  if (pass !== cred) {
    return (
      <div className="">
        <input
          type="text"
          name="pass"
          className="text-white bg-gray-800 p-2.5 rounded-lg outline-none focus:ring-2 focus:ring-blue-700 w-full transition-all duration-300"
          id="pass"
          placeholder="Enter password"
          onChange={(e) => setPass(e.target.value)}
        />
      </div>
    );
  } else {
    return (
      <div className="max-w-prose -auto">
        <div className="mb-6">
          <form className="mb-6" onSubmit={handleSubmit}>
            <div className="mb-2">
              <label
                htmlFor="title"
                className="text-xs text-gray-400 font-bold"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                className="w-full border-2 border-gray-600 bg-gray-800 outline-none focus:ring-indigo-500 focus:ring-1 rounded-md p-2"
                placeholder="React is awesome!"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="image"
                className="text-xs text-gray-400 font-bold"
              >
                Image
              </label>
              <input
                id="image"
                type="text"
                className="w-full border-2 border-gray-600 bg-gray-800 outline-none focus:ring-indigo-500 focus:ring-1 rounded-md p-2"
                placeholder="Image URL"
              />
            </div>
            <Editor
              editorState={editorState}
              toolbarClassName="text-black p-2"
              wrapperClassName="mb-4 divide-y-[1px] divide-black bg-white"
              placeholder="Write something..."
              onEditorStateChange={(state) => {
                setEditorState(state);
                setText(state.getCurrentContent().getPlainText());
                setHtml(draftToHtml(convertToRaw(state.getCurrentContent())));
              }}
              editorClassName="bg-white text-black shadow-md px-2"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-indigo-700 active:bg-indigo-900 hover:bg-indigo-500 font-bold text-white"
            >
              Create
            </button>
            {ok && (
              <div className="text-green-500 font-bold text-lg mt-4">
                Post created successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }
}
