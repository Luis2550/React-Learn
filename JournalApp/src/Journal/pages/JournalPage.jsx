import { AddIcon } from "../../icons"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView } from "../views/NoteView"
import { NothingSelectedView } from "../views/NothingSelectedView"

export const JournalPage = () => {
  return (
    
    <JournalLayout>

      {/* <NothingSelectedView /> */}

      <NoteView />

      <button className="fixed bottom-5 right-8 bg-sky-800 rounded-full cursor-pointer hover:bg-sky-700" >

        <AddIcon width={50} height={50}/>

      </button>

    </JournalLayout>

  )
}
