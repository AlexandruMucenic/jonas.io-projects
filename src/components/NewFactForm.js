import { useState } from "react";
import { CATEGORIES, isValidHttpUrl } from "../constants";
import { addFact, getFacts } from "../factService";

function NewFactForm({ setFacts, setShowForm }) {
  const [text, setText] = useState("");
  const [source, setSource] = useState("");
  const [category, setCategory] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (text && isValidHttpUrl(source) && category) {
      setIsUploading(true);

      await addFact({ text, source, category });
      const updatedFacts = await getFacts("all");
      setFacts(updatedFacts);

      setText("");
      setSource("");
      setCategory("");
      setIsUploading(false);
      setShowForm(false);
    }
  }

  return (
    <form className="fact-form" onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Share a fact with the world...'
        value={text}
        onChange={e => setText(e.target.value)}
        disabled={isUploading}
      />

      <span>{200 - text.length}</span>

      <input
        type='text'
        placeholder='Trustworthy source...'
        value={source}
        onChange={e => setSource(e.target.value)}
        disabled={isUploading}
      />

      <select
        value={category}
        onChange={e => setCategory(e.target.value)}
        disabled={isUploading}
      >
        <option value=''>Choose category:</option>
        {CATEGORIES.map(cat => (
          <option key={cat.name} value={cat.name}>
            {cat.name.toUpperCase()}
          </option>
        ))}
      </select>

      <button className='btn btn-large' disabled={isUploading}>
        Post
      </button>
    </form>
  );
}

export default NewFactForm;
