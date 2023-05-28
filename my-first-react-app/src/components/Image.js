export function Image({userImage, imageAlt}) {
  return (
    <div id="selfie">
      <img src={userImage} alt={imageAlt} />
    </div>
  );
}