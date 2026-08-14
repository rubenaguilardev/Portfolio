
const info = [
  { num: '01', label: 'const', text: 'developer = {', numStyles: 'mr-2', labelStyles: 'text-primary', },
  { num: '02', label: 'name:', text: "'Ruben Aguilar'", numStyles: 'mr-5', labelStyles: 'text-secondary', textStyles: 'text-[#81A9F1]' },
  { num: '03', label: 'focus:', text: "'Frontend'", numStyles: 'mr-5', labelStyles: 'text-secondary', textStyles: 'text-[#81A9F1]' },
  { num: '04', label: 'skills:', text: "'React', 'TypeScript', 'Design'", numStyles: 'mr-5', labelStyles: 'text-secondary', textStyles: 'text-[#81A9F1]' },
  { num: '05', label: 'shipped:', text: "'5+ production apps'", numStyles: 'mr-5', labelStyles: 'text-secondary', textStyles: 'text-[#81A9F1]' },
  { num: '06', label: '}', numStyles: 'mr-2', },
  { num: '07', label: 'developer', text: '.showcase()', numStyles: 'mr-5', labelStyles: 'text-primary', }
]

const Card = () => {
  return (
    <div>
      <div className='flex justify-between items-center glass-strong px-6 py-6 rounded-t-[20px] h-10 w-full animate-fade-in-left animation-delay-400'>
        <div className='flex gap-2'>
          <span className="block w-3 h-3 bg-primary rounded-full" />
          <span className="block w-3 h-3 bg-primary/50 rounded-full" />
          <span className="block w-3 h-3 bg-primary/20 rounded-full" />
        </div>
        <div className='flex items-center gap-2'>
          <span className="block w-2 h-2 bg-[#003C9A] rounded-full" />
          <span className='text-xs text-muted-foreground tracking-wide'>Portfolio.tsx</span>
        </div>
      </div>
      <div className='py-10 w-full flex flex-col justify-center bg-black/40 glass border-t-0 rounded-b-[20px] animate-fade-in-left animation-delay-400'>
        {info.map(({ num, label, text, numStyles, labelStyles, textStyles }) => (
          <div key={label} className={`flex px-10 tracking-wide ${num === '07' ? 'gap-0 mt-4' : 'gap-3'}`}>
            <span className={`${numStyles} text-muted-foreground/80 space-grotesk font-light`}>{num}</span>
            <span className={labelStyles}>{label}</span>
            {num === '04' ?
              <span>[<span className={textStyles}> {text} </span>] ,</span> :
              num !== '07' ? <span><span className={textStyles}>{text}</span>{/[234]/.test(num) && ' ,'}</span> :
                <span className={textStyles}>{text}</span>
            }
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card