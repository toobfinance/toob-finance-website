interface ArrowRightRoundedProps {
  className?: string
}

const ArrowRightRounded: React.FC<ArrowRightRoundedProps> = ({ className }) => (
  <svg
    width="15"
    height="16"
    viewBox="0 0 15 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className ?? ""}
  >
    <path
      d="M13.9498 8.00005C13.9498 11.5623 11.062 14.45 7.4998 14.45C3.93757 14.45 1.0498 11.5623 1.0498 8.00005C1.0498 4.43781 3.93757 1.55005 7.4998 1.55005C11.062 1.55005 13.9498 4.43781 13.9498 8.00005ZM7.51506 4.82717C7.00875 4.48963 6.35775 4.45816 5.82124 4.74529C5.28473 5.03242 4.9498 5.59154 4.9498 6.20005V9.80005C4.9498 10.4086 5.28473 10.9677 5.82124 11.2548C6.35775 11.5419 7.00875 11.5105 7.51506 11.1729L10.2151 9.37293C10.6741 9.06692 10.9498 8.55173 10.9498 8.00005C10.9498 7.44837 10.6741 6.93319 10.2151 6.62717L7.51506 4.82717Z"
      fill="#12141D"
      stroke="#12141D"
      strokeWidth="1.5"
    />
  </svg>
)

export default ArrowRightRounded
