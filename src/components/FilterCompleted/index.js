import './filterComplited.css'

function FilterCompleted({ hideCompleted, setHideCompleted }) {
  return (
    <div className='FilterCompletedSection'>
        <div className="FilterCompleted">
        <input
            type="checkbox"
            value={hideCompleted}
            onChange={() => setHideCompleted(!hideCompleted)}
        />
        <p>Hide completed</p>
        </div>
    </div>
  );
}

export default FilterCompleted;
