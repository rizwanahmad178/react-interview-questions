export default function ProgressBar({ bar }) {
  return (
    <div className="progressApp">
      <div className="progress" style={{ width: `${bar}%` }}>
        <span style={{ background:"#04AA6D" }}>{bar}%</span>
      </div>
    </div>
  );
}
