import './Main.css';
import Note from '../Note/Note';
import Button from '../Button/Button';

//temporary cleaner look
const notes = [ 1, 2, 3, 4, 5, 6, 7, 8 ]
const recentNotes = [ 1, 2, 3, 4 ]

const Main = () => {
  return (
    <main>
      <div className="content container">
        <div className="create-note-container">
          <h1>Welcome, user.name!</h1>
          <Button label="Create Note" />
        </div>
        <div className="pinned-notes">
          <h2 className="pinned-notes__heading">Pinned Notes</h2>
          <div className="notes-container">
            {notes.map((i)=> (
              <Note key={i}/>
            ))}
          </div>
        </div>
        <div className="recent-notes">
          <h2 className="recent-notes__heading">Recent Notes</h2>
          <div className="notes-container">
            {recentNotes.map((i)=> (
              <Note key={i}/>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
