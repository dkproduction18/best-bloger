const FacebookIcon = ({ width = '25', height = '24', color = '#1877F2', textFill='white' }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1031_13861)">
        <path
          d="M24.5 11.9999C24.5 5.37252 19.1274 -6.10352e-05 12.5 -6.10352e-05C5.87258 -6.10352e-05 0.5 5.37252 0.5 11.9999C0.5 17.9894 4.8882 22.9539 10.625 23.8542V15.4687H7.57812V11.9999H10.625V9.35619C10.625 6.34869 12.4166 4.68744 15.1576 4.68744C16.4701 4.68744 17.8438 4.92181 17.8438 4.92181V7.87494H16.3306C14.84 7.87494 14.375 8.80002 14.375 9.74994V11.9999H17.7031L17.1711 15.4687H14.375V23.8542C20.1118 22.9539 24.5 17.9894 24.5 11.9999Z"
          fill={color}
        />
        <path
          d="M17.1711 15.4687L17.7031 11.9999H14.375V9.74994C14.375 8.80095 14.84 7.87494 16.3306 7.87494H17.8438V4.92181C17.8438 4.92181 16.4705 4.68744 15.1576 4.68744C12.4166 4.68744 10.625 6.34869 10.625 9.35619V11.9999H7.57812V15.4687H10.625V23.8542C11.8674 24.0485 13.1326 24.0485 14.375 23.8542V15.4687H17.1711Z"
          fill={textFill}
        />
      </g>
      <defs>
        <clipPath id="clip0_1031_13861">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0.5 -6.10352e-05)"
          />
        </clipPath>
      </defs>
    </svg>


  )
}

export default FacebookIcon
