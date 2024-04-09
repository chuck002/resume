function Languages({src, alt, title}) {
  return (
    <div>
    <li>
        <h5>{title}</h5>
        <img width="150px" height="100px" src={src} alt={alt} />
    </li>
    </div>
  );
}

export default Languages;