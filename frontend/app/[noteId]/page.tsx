import axios from "axios";
import { Note } from "../types";
import ReactMarkdown from "react-markdown";
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
    <div>
      created at: {new Date(data.createdAt).toLocaleString("en-GB")}
      last updated at: {new Date(data.updatedAt).toLocaleString("en-GB")}
      <ReactMarkdown className="prose lg:prose-xl">
        {data.content}
      </ReactMarkdown>
    </div>
  );
}
