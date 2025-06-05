import './Main.css';
import Note from '../Note/Note';
import Button from '../Button/Button';

const Main = () => {
  return (
    <main>
      <div class="content container">
        <div className="create-note-container">
          <h1>Welcome, user.name!</h1>
          <Button label="Create Note" />
        </div>
        <div className="pinned-notes">
          <h2 className="pinned-notes__heading">Pinned Notes</h2>
          <div className="notes-container">
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
            <Note />
          </div>
        </div>
        <div className="recent-notes">
          <h2 className="recent-notes__heading">Recent Notes</h2>
          <div className="notes-container">
            <Note />
            <Note />
            <Note />
            <Note />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
