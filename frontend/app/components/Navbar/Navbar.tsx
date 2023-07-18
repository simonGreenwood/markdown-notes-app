import Image from "next/image";
import ToggleRawNavbarElement from "./RawToggle";
export default function Navbar() {
  return (
    <div>
      <div className="px-3 py-1 hover:bg-gray-300 rounded-xl inline-block">
        <Image
          className=""
          src="../delete.svg"
          alt="delete"
          width="32"
          height="32"
        />
      </div>
      <div className="px-3 py-1 hover:bg-gray-300 rounded-xl inline-block">
        <Image
          className=""
          src="../edit.svg"
          alt="edit"
          width="32"
          height="32"
        />
      </div>
      <div className="px-3 py-1 hover:bg-gray-300 rounded-xl inline-block">
        <Image
          className=""
          src="../save.svg"
          alt="save"
          width="32"
          height="32"
        />
      </div>
      <div className="px-3 py-1 hover:bg-gray-300 rounded-xl inline-block">
        <Image
          className=""
          src="../share.svg"
          alt="share"
          width="32"
          height="32"
        />
      </div>
      <div className="px-3 py-1 hover:bg-gray-300 rounded-xl inline-block">
        <Image
          className="copy"
          src="../copy.svg"
          alt="copy"
          width="32"
          height="32"
        />
      </div>
      <ToggleRawNavbarElement />
    </div>
  );
}
