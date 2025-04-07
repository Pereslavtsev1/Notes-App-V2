import { Note } from "@/types";
import NoteButton from "./NoteButton";

type NoteRenderListProps = {
  notes: Note[];
};

const NoteRenderList = ({ notes }: NoteRenderListProps) => {
  return (
    <div className="space-y-1">
      {notes.map((note) => (
        <NoteButton key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NoteRenderList;
