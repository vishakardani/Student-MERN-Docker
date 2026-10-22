function Skills({ skillList }) { // Destructuring the prop directly for cleaner code
  return (
    <section>
      <h3>Technical Skills</h3>
      <ul>
        {skillList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;