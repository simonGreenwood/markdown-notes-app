import axios from "axios";
import { Note } from "../types";
import Markdown from "markdown-to-jsx";
import Navbar from "./Navbar";
// write a server side nextjs function which will get data from the dynamic route and return it to the client
async function getData(noteId: string) {
  const res = await axios.get(`http://localhost:3003/api/notes/${noteId}`);
  if (res.status === 404) {
    return { notFound: true };
  }
  if (res.status !== 200) {
    throw new Error();
  }
  return res.data;
}

export default async function NotePage({
  params,
}: {
  params: { noteId: string };
}) {
  const data: Note = await getData(params.noteId);
  return (
    <div className="flex flex-col items-center justify-center max-w-7xl">
      <Navbar />
      <p>created at: {new Date(data.createdAt).toLocaleString("en-GB")}</p>
      <p>last updated at: {new Date(data.updatedAt).toLocaleString("en-GB")}</p>
      <p>raw: {data.content}</p>
      <p>markdown:</p>
      <Markdown className="prose lg:prose-xl">{data.content}</Markdown>
    </div>
  );
}
