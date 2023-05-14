export function Image(props) {
    return (
        <div id = "selfie">
            <img src={props.userImage} alt={props.imageAlt} />
        </div>
    );
  }
  
  export default Image;