import Img from "../img/img.png";
import Attach from "../img/attach.png";

export const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Send a Message..." />

      <div className="send">
        <img src={Attach} alt="" />

        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>

        <button>Send</button>
      </div>
    </div>
  );
};
