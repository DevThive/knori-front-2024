import Link from "next/link";

const Social = () => {
  return (
    <>
      <ul>
        <li>
          <Link
            href="https://www.facebook.com/profile.php?id=61557296667139"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>
        </li>
        <li>
          <Link href="https://www.instagram.com/kplaynori/" target="_blank">
            <i className="fab fa-instagram"></i>
          </Link>
        </li>
        <li>
          <a
            href="
            http://pf.kakao.com/_xaxocxeG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-comment"></i>
          </a>
        </li>
        {/* <li>
          <Link href="https://www.linkedin.com" target="_blank">
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </li> */}
      </ul>
    </>
  );
};

export default Social;
