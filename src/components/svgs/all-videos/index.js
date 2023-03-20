const AllVideos = ({stroke}) => {
  return (
    <svg
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.82552 18.3346V1.66797M5.65885 18.3346V14.168M5.65885 5.83464V1.66797M13.9922 18.3346V14.168M13.9922 5.83464V1.66797M1.49219 5.83464H18.1589M1.49219 14.168H18.1589M18.1589 14.3346V5.66797C18.1589 4.26784 18.1589 3.56777 17.8864 3.03299C17.6467 2.56259 17.2642 2.18014 16.7938 1.94045C16.2591 1.66797 15.559 1.66797 14.1589 1.66797L5.49219 1.66797C4.09206 1.66797 3.39199 1.66797 2.85721 1.94045C2.38681 2.18014 2.00435 2.56259 1.76467 3.03299C1.49219 3.56777 1.49219 4.26784 1.49219 5.66797L1.49219 14.3346C1.49219 15.7348 1.49219 16.4348 1.76467 16.9696C2.00436 17.44 2.38681 17.8225 2.85721 18.0622C3.39199 18.3346 4.09206 18.3346 5.49219 18.3346H14.1589C15.559 18.3346 16.2591 18.3346 16.7938 18.0622C17.2642 17.8225 17.6467 17.44 17.8864 16.9696C18.1589 16.4348 18.1589 15.7348 18.1589 14.3346Z"
        stroke={stroke ? stroke : "#667085"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default AllVideos;