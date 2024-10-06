import ImageWithText from './img';
import Button from './suggest';
import EmptyBoxes from './boxes';
import './App.css'

export function App() {
  return (
        <div>
          <ImageWithText />
          <div id = 'button'>
            <Button></Button>
          </div>
        </div>
    );
}
export default App;
