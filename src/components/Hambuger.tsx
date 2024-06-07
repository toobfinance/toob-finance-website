interface HambugerProps {
  open: boolean
  setOpen: any
  className?: string
}

const Hambuger: React.FC<HambugerProps> = ({ open, setOpen, className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center w-10 h-10 bg-black rounded-[13px] cursor-pointer ${
        className ?? ""
      }`}
      onClick={() => setOpen(!open)}
    >
      <span
        data-open={open}
        className="block h-px w-5 border-t border-white rounded-full data-[open=true]:rotate-45 data-[open=true]:translate-y-1.5 transition-all"
      />
      <span
        data-open={open}
        className="block h-px w-5 border-t border-white rounded-full mt-[5px] data-[open=true]:scale-0 transition-all"
      />
      <span
        data-open={open}
        className="block h-px w-5 border-t border-white rounded-full mt-[5px] data-[open=true]:-rotate-45 data-[open=true]:-translate-y-1.5 transition-all"
      />
    </div>
  )
}

export default Hambuger
