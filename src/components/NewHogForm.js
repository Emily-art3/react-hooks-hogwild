import React, { useState } from "react";

function NewHogForm({ addHog }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [weight, setWeight] = useState("");
  const [greased, setGreased] = useState(false);
  const [highestMedal, setHighestMedal] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new hog object
    const newHog = { name, image, specialty, weight: parseFloat(weight), greased, "highest medal achieved": highestMedal };
    addHog(newHog);
    // Clear the form after submitting
    setName("");
    setImage("");
    setSpecialty("");
    setWeight("");
    setGreased(false);
    setHighestMedal("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" required />
      <input value={specialty} onChange={(e) => setSpecialty(e.target.value)} placeholder="Specialty" required />
      <input value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="Weight" required type="number" />
      <label>
        Greased:
        <input type="checkbox" checked={greased} onChange={(e) => setGreased(e.target.checked)} />
      </label>
      <input value={highestMedal} onChange={(e) => setHighestMedal(e.target.value)} placeholder="Highest Medal" required />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default NewHogForm;
