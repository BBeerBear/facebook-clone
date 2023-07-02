export default function LeftLink({ img, text }) {
  return (
    <div className='left_link hover1'>
      <img src={`${process.env.PUBLIC_URL}/left/${img}.png`} alt='' />
      <span>{text}</span>
    </div>
  );
}
