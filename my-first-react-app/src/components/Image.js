export function Image(props) {
    return (
        <div id = "userPhoto">
            <img src = {props.userImage} alt = {props.imageAlt} />
        </div>
    );
  }
  
  export default Image;