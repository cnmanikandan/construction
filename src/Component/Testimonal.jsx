const Testimonal = () => {
  const testimonal_block1 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugia";
  return (
    <div className="testimonal_block">
      <h1 className="testimonal_block_header">Testimonal</h1>
      <div className="testimonal_block1">
        <h1 className="testimonl_name">Molik</h1>
        <h1 className="testimonal_char1">&quot; &quot;</h1>
        <p className="testimonal_block1_para">{testimonal_block1}</p>
      </div>
      <div className="testimonal_block2">
        <h1 className="testimonal_char2">&quot; &quot;</h1>
        <h1 className="testimonal_name2">JEEASON</h1>
        <p className="testimonal_block2_para">{testimonal_block1}</p>
      </div>
    </div>
  );
};

export default Testimonal;
