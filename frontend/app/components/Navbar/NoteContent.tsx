"use client";
import { useRawStore } from "@/app/store/store";
import { RawState, Note } from "@/app/types";
import Markdown from "markdown-to-jsx";
type NoteContentProps = {
  note: Note;
};

export const NoteContent = (props: NoteContentProps) => {
  const raw = useRawStore((state: RawState) => state.raw);
  return (
    <div className="prose lg:prose-xl">
      {raw ? (
        props.note.content
      ) : (
        <Markdown className="prose lg:prose-xl">{props.note.content}</Markdown>
      )}
    </div>
  );
};
