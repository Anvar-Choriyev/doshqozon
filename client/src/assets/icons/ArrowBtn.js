const ArrowBtn = ({arrow}) => {
    return ( 
        <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className={arrow}>
        <path 
            d="M1.5 12H18" 
            stroke="#35383F" 
            stroke-width="1.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            className=""/>
        <path 
            d="M1.5 12L7.86396 18.364" 
            stroke="#35383F" 
            stroke-width="1.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"/>
        <path 
            d="M1.5 12L7.86396 5.63604" 
            stroke="#35383F" 
            stroke-width="1.5" 
            stroke-linecap="round" 
            stroke-linejoin="round"/>
        </svg>
     );
}
 
export default ArrowBtn;